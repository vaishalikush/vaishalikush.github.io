"use strict";

var commonWords = ['the', 'of', 'to', 'and', 'a', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 
    'are', 'with', 'as', 'I', 'his', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'or', 'had', 'by', 'hot', 
    'word', 'but', 'what', 'some', 'we', 'can', 'out', 'other', 'were', 'all', 'there', 'when', 'up', 'use', 'your', 
    'how', 'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'way', 'about', 'many', 'then',
    'them', 'write', 'would', 'like', 'so', 'these', 'her', 'long', 'make', 'thing', 'see', 'him', 'two', 'has', 
    'look', 'more', 'day', 'could', 'go', 'come', 'did', 'number', 'sound', 'no', 'most', 'people', 'my', 'over', 
    'know', 'water', 'than', 'call', 'first', 'who', 'may', 'down', 'side', 'been', 'now', 'find', 'any', 'new', 
    'work', 'part', 'take', 'get', 'place', 'made', 'live', 'where', 'after', 'back', 'little', 'only', 'round', 
    'man', 'year', 'came', 'show', 'every', 'good', 'me', 'give', 'our', 'under', 'name', 'very', 'through', 'just', 
    'form', 'sentence', 'great', 'think', 'say', 'help', 'low', 'line', 'differ', 'turn', 'cause', 'much', 'mean', 
    'before', 'move', 'right', 'boy', 'old', 'too', 'same', 'tell', 'does', 'set', 'three', 'want', 'air', 'well', 
    'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add', 'even', 'land', 
    'here', 'must', 'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 
    'off', 'need', 'house', 'picture', 'try', 'us', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 
    'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school', 
    'grow', 'study', 'still', 'learn', 'plant', 'cover', 'food', 'sun', 'four', 'between', 'state', 'keep', 'eye', 
    'never', 'last', 'let', 'thought', 'city', 'tree', 'cross', 'farm', 'hard', 'start', 'might', 'story', 'saw', 
    'far', 'sea', 'draw', 'left', 'late', 'run', "don't", 'while', 'press', 'close', 'night', 'real', 'life', 'few', 
    'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease', 
    'paper', 'group', 'always', 'music', 'those', 'both', 'mark', 'often', 'letter', 'until', 'mile', 'river', 'car', 
    'feet', 'care', 'second', 'book', 'carry', 'took', 'science', 'eat', 'room', 'friend', 'began', 'idea', 'fish', 
    'mountain', 'stop', 'once', 'base', 'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood', 'main', 
    'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'red', 'list', 'though', 'feel', 'talk', 
    'bird', 'soon', 'body', 'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'door', 'product', 'black', 
    'short', 'numeral', 'class', 'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 
    'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'since', 'top', 'whole', 'king', 'space', 'heard', 
    'best', 'hour', 'better', 'true', 'during', 'hundred', 'five', 'remember', 'step', 'early', 'hold', 'west', 
    'ground', 'interest', 'reach', 'fast', 'verb', 'sing', 'listen', 'six', 'table', 'travel', 'less', 'morning', 
    'ten', 'simple', 'several', 'vowel', 'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center', 'love', 
    'person', 'money', 'serve', 'appear', 'road', 'map', 'rain', 'rule', 'govern', 'pull', 'cold', 'notice', 'voice', 
    'unit', 'power', 'town', 'fine', 'certain', 'fly', 'fall', 'lead', 'cry', 'dark', 'machine', 'note', 'wait', 
    'plan', 'figure', 'star', 'box', 'noun', 'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 
    'stood', 'contain', 'front', 'teach', 'week', 'final', 'gave', 'green', 'oh', 'quick', 'develop', 'ocean', 'warm',
    'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street', 'inch', 
    'multiply', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object', 'decide', 'surface', 'deep', 
    'moon', 'island', 'foot', 'system', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 
    'stead', 'dry', 'wonder', 'laugh', 'thousand', 'ago', 'ran', 'check', 'game', 'shape', 'equate', 'hot', 'miss', 
    'brought', 'heat', 'snow', 'tire', 'bring', 'yes', 'distant', 'fill', 'east', 'paint', 'language', 'among', 'grand', 
    'ball', 'yet', 'wave', 'drop', 'heart', 'am', 'present', 'heavy', 'dance', 'engine', 'position', 'arm', 'wide', 
    'sail', 'material', 'size', 'vary', 'settle', 'speak', 'weight', 'general', 'ice', 'matter', 'circle', 'pair', 
    'include', 'divide', 'syllable', 'felt', 'perhaps', 'pick', 'sudden', 'count', 'square', 'reason', 'length', 
    'represent', 'art', 'subject', 'region', 'energy', 'hunt', 'probable', 'bed', 'brother', 'egg', 'ride', 'cell', 
    'believe', 'fraction', 'forest', 'sit', 'race', 'window', 'store', 'summer', 'train', 'sleep', 'prove', 'lone', 
    'leg', 'exercise', 'wall', 'catch', 'mount', 'wish', 'sky', 'board', 'joy', 'winter', 'sat', 'written', 'wild', 
    'instrument', 'kept', 'glass', 'grass', 'cow', 'job', 'edge', 'sign', 'visit', 'past', 'soft', 'fun', 'bright', 
    'gas', 'weather', 'month', 'million', 'bear', 'finish', 'happy', 'hope', 'flower', 'clothe', 'strange', 'gone', 
    'jump', 'baby', 'eight', 'village', 'meet', 'root', 'buy', 'raise', 'solve', 'metal', 'whether', 'push', 'seven',
    'paragraph', 'third', 'shall', 'held', 'hair', 'describe', 'cook', 'floor', 'either', 'result', 'burn', 'hill', 
    'safe', 'cat', 'century', 'consider', 'type', 'law', 'bit', 'coast', 'copy', 'phrase', 'silent', 'tall', 'sand', 
    'soil', 'roll', 'temperature', 'finger', 'industry', 'value', 'fight', 'lie', 'beat', 'excite', 'natural', 'view', 
    'sense', 'ear', 'else', 'quite', 'broke', 'case', 'middle', 'kill', 'son', 'lake', 'moment', 'scale', 'loud', 
    'spring', 'observe', 'child', 'straight', 'consonant', 'nation', 'dictionary', 'milk', 'speed', 'method', 'organ', 
    'pay', 'age', 'section', 'dress', 'cloud', 'surprise', 'quiet', 'stone', 'tiny', 'climb', 'cool', 'design', 'poor', 
    'lot', 'experiment', 'bottom', 'key', 'iron', 'single', 'stick', 'flat', 'twenty', 'skin', 'smile', 'crease', 'hole', 
    'trade', 'melody', 'trip', 'office', 'receive', 'row', 'mouth', 'exact', 'symbol', 'die', 'least', 'trouble', 'shout', 
    'except', 'wrote', 'seed', 'tone', 'join', 'suggest', 'clean', 'break', 'lady', 'yard', 'rise', 'bad', 'blow', 'oil', 
    'blood', 'touch', 'grew', 'cent', 'mix', 'team', 'wire', 'cost', 'lost', 'brown', 'wear', 'garden', 'equal', 'sent', 
    'choose', 'fell', 'fit', 'flow', 'fair', 'bank', 'collect', 'save', 'control', 'decimal', 'gentle', 'woman', 'captain', 
    'practice', 'separate', 'difficult', 'doctor', 'please', 'protect', 'noon', 'whose', 'locate', 'ring', 'character', 
    'insect', 'caught', 'period', 'indicate', 'radio', 'spoke', 'atom', 'human', 'history', 'effect', 'electric', 'expect', 
    'crop', 'modern', 'element', 'hit', 'student', 'corner', 'party', 'supply', 'bone', 'rail', 'imagine', 'provide', 
    'agree', 'thus', 'capital', "won't", 'chair', 'danger', 'fruit', 'rich', 'thick', 'soldier', 'process', 'operate', 
    'guess', 'necessary', 'sharp', 'wing', 'create', 'neighbor', 'wash', 'bat', 'rather', 'crowd', 'corn', 'compare', 
    'poem', 'string', 'bell', 'depend', 'meat', 'rub', 'tube', 'famous', 'dollar', 'stream', 'fear', 'sight', 'thin', 
    'triangle', 'planet', 'hurry', 'chief', 'colony', 'clock', 'mine', 'tie', 'enter', 'major', 'fresh', 'search', 'send', 
    'yellow', 'gun', 'allow', 'print', 'dead', 'spot', 'desert', 'suit', 'current', 'lift', 'rose', 'continue', 'block', 
    'chart', 'hat', 'sell', 'success', 'company', 'subtract', 'event', 'particular', 'deal', 'swim', 'term', 'opposite', 
    'wife', 'shoe', 'shoulder', 'spread', 'arrange', 'camp', 'invent', 'cotton', 'born', 'determine', 'quart', 'nine', 'truck', 
    'noise', 'level', 'chance', 'gather', 'shop', 'stretch', 'throw', 'shine', 'property', 'column', 'molecule', 'select', 'wrong', 
    'gray', 'repeat', 'require', 'broad', 'prepare', 'salt', 'nose', 'plural', 'anger', 'claim', 'continent', 'oxygen', 'sugar', 
    'death', 'pretty', 'skill', 'women', 'season', 'solution', 'magnet', 'silver', 'thank', 'branch', 'match', 'suffix', 
    'especially', 'fig', 'afraid', 'huge', 'sister', 'steel', 'discuss', 'forward', 'similar', 'guide', 'experience', 
    'score', 'apple', 'bought', 'led', 'pitch', 'coat', 'mass', 'card', 'band', 'rope', 'slip', 'win', 'dream', 'evening', 
    'condition', 'feed', 'tool', 'total', 'basic', 'smell', 'valley', 'nor', 'double', 'seat', 'arrive', 'master', 'track', 
    'parent', 'shore', 'division', 'sheet', 'substance', 'favor', 'connect', 'post', 'spend', 'chord', 'fat', 'glad', 
    'original', 'share', 'station', 'dad', 'bread', 'charge', 'proper', 'bar', 'offer', 'segment', 'slave', 'duck', 'instant', 
    'market', 'degree', 'populate', 'chick', 'dear', 'enemy', 'reply', 'drink', 'occur', 'support', 'speech', 'nature', 
    'range', 'steam', 'motion', 'path', 'liquid', 'log', 'meant', 'quotient', 'teeth', 'shell', 'neck'];

var easyWords = ['all', 'will', 'see', 'look', 'call', 'been', 'little', 'good', 'differ', 'too', 'tell', 
    'three', 'well', 'small', 'spell', 'add', 'follow', 'off', 'need', 'school', 'still', 'food', 'between', 
    'keep', 'tree', 'cross', 'press', 'seem', 'letter', 'feet', 'book', 'carry', 'took', 'room', 'wood', 'feel', 
    'soon', 'door', 'class', 'happen', 'pass', 'better', 'less', 'pattern', 'appear', 'pull', 'fall', 'correct', 
    'stood', 'week', 'green', 'free', 'street', 'wheel', 'full', 'deep', 'moon', 'foot', 'common', 'possible', 
    'miss', 'fill', 'ball', 'settle', 'matter', 'syllable', 'sudden', 'egg', 'cell', 'summer', 'sleep', 'wall', 
    'written', 'glass', 'grass', 'million', 'happy', 'village', 'meet', 'root', 'shall', 'cook', 'floor', 'hill', 
    'tall', 'roll', 'middle', 'kill', 'speed', 'dress', 'cool', 'poor', 'bottom', 'office', 'seed', 'suggest', 
    'blood', 'choose', 'fell', 'collect', 'difficult', 'noon', 'effect', 'supply', 'agree', 'process', 'guess', 
    'necessary', 'bell', 'dollar', 'hurry', 'yellow', 'allow', 'current', 'sell', 'success', 'opposite', 'arrange', 
    'cotton', 'pretty', 'skill', 'suffix', 'especially', 'steel', 'discuss', 'apple', 'mass', 'feed', 'tool', 
    'smell', 'valley', 'arrive', 'sheet', 'connect', 'offer', 'degree', 'occur', 'support', 'speech', 'teeth', 
    'shell']


function updateSlider() {
    var currentVal = document.querySelector("#maxword").value;
    document.querySelector("#max").innerHTML = currentVal;

    var currentVal = document.querySelector("#minword").value;
    document.querySelector("#min").innerHTML = currentVal;
}

function generatePassword(){
    var minWordLen = parseInt(document.querySelector('#minword').value);
    var maxWordLen = parseInt(document.querySelector('#maxword').value);
    var passwordLen = parseInt(document.querySelector('#maxpwlen').value);
    var easyTyping = document.querySelector('#easytype').checked;
    var substitutions = document.querySelector('#numsubs').checked;

    var password = "";
    var myPwdLen = 0;
    var cont = true; 

    if(minWordLen > maxWordLen){
        window.alert("Minimum length must be less than maximum length");
    }
    else{
        while (cont) {
            //pick a random word between min and max lengths
            //choose from easy words if box is checked
            if (easyTyping == true) {
                var randInt = Math.floor(Math.random() * easyWords.length);
                var word = easyWords[randInt];
                // keep finding words if it is not in the length bounds
                while (word.length < minWordLen || word.length > maxWordLen) {
                    randInt = Math.floor(Math.random() * easyWords.length);
                    word = easyWords[randInt];
                }

                myPwdLen += word.length;
                if (myPwdLen <= passwordLen) {
                    password+=word;
                }
                else {
                    cont = false;
                    myPwdLen -= word.length;
                }
            }
            else {
                var randInt = Math.floor(Math.random() * commonWords.length);
                var word = commonWords[randInt];
                // keep finding words if it is not in the length bounds
                while (word.length < minWordLen || word.length > maxWordLen) {
                    randInt = Math.floor(Math.random() * commonWords.length);
                    word = commonWords[randInt];
                }

                myPwdLen += word.length;
                if (myPwdLen <= passwordLen) {
                    password+=word;
                }
                else {
                    cont = false;
                    myPwdLen -= word.length;
                }

            }

        }

        //check if substitutions, if so add some
        if (substitutions == true){
            password = password.replace("s", "$");
            password = password.replace("o", "0");
            password = password.replace("e", "3");
            password = password.replace("t", "7");
            password = password.replace("l", "1");
            password = password.replace("a","4");
        }


    }

    return password;
}

function generatePasswordTable() {
    var tbl = document.querySelector("#passwordtable");
    var tr = document.createElement("tr");
    tbl.appendChild(tr);
    var td = document.createElement("td");
    td.innerHTML = generatePassword();
    tr.appendChild(td);
    tr.classList.add("red");
}

window.onload = updateSlider;

