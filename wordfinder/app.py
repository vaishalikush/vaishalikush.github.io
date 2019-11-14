from flask import Flask, request, Response, render_template
import requests
import itertools
from flask_wtf.csrf import CSRFProtect
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField


def isBlank(str):
    if (str is None) or (str is "") or (str.isspace()):
        return True
    else: 
        return False

def lettersOrPatterns(letters, patterns):
    #no letters provided
    if isBlank(letters):
        if isBlank(patterns):
            return False
        else:
            return True
    #no pattern provided
    elif isBlank(patterns):
        if(isBlank(letters)):
            return False
        else:
            return True
    else: 
        return True

def patternLen(inputLen, pattern):
    if(inputLen == 0 and len(pattern) == 0):
        return True
    elif(len(pattern) == 0 and inputLen != 0):
        return True
    elif(len(pattern) != inputLen):
        return False
    else: 
        return True

def matchesPattern(str, str_pattern):
    for i in range(0,len(str_pattern)):
        if(str_pattern[i] != '.'):
            if(str_pattern[i] != str[i]):
                return False
    return True




class WordForm(FlaskForm):
    avail_letters = StringField("Letters")
    wordlen = SelectField('Length', choices=[(
        '0', 'Any'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10')])
    pattern = StringField("Pattern")
    submit = SubmitField("Go")

    def validate(self):
        val1 = lettersOrPatterns(self.avail_letters.data, self.pattern.data)
        print(val1)
        val2 = patternLen(int(self.wordlen.data), self.pattern.data)
        print(val2)
        return val1 and val2
            


csrf = CSRFProtect()
app = Flask(__name__)
app.config["SECRET_KEY"] = "row the boat"
csrf.init_app(app)


@app.route('/index')
def index():
    form = WordForm()
    return render_template("index.html", form=form, name="Vaishali Kushwaha")


@app.route('/words', methods=['POST', 'GET'])
def letters_2_words():

    form = WordForm()
    if form.validate_on_submit():
        letters = form.avail_letters.data
        #if no letters specified allow permutations of all letters
        if(isBlank(letters)):
            letters = "abcdefghijklmnopqrstuvwxyz"
        word_len = int(form.wordlen.data)
        print(word_len)
        word_pattern = form.pattern.data
        
        print("Valid")
    else:
        print("NOT Valid")
        return render_template("index.html", form=form, name="Vaishali Kushwaha")

    with open('sowpods.txt') as f:
        good_words = set(x.strip().lower() for x in f.readlines())

    word_set = set()

    if word_len == 0:
        for l in range(3, 11):
            for word in itertools.permutations(letters, l):
                w = "".join(word)
                if ((w in good_words) and (isBlank(word_pattern) == False and matchesPattern(w,word_pattern))) or ((w in good_words) and (isBlank(word_pattern) == True)):
                    word_set.add(w)
    else:
        for word in itertools.permutations(letters, word_len):
                w = "".join(word)
                if ((w in good_words) and (isBlank(word_pattern) == False and matchesPattern(w, word_pattern))) or ((w in good_words) and (isBlank(word_pattern) == True)):
                    word_set.add(w)
    
    word_set = sorted(word_set)
    word_set = sorted(word_set, key=len)

    return render_template('wordlist.html',
                           wordlist=word_set,
                           name="Vaishali Kushwaha")



@app.route('/proxy')
def proxy():
    result = requests.get(request.args['url'])
    resp = Response(result.text)
    resp.headers['Content-Type'] = 'application/json'
    return resp
