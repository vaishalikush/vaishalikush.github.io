var modals = document.getElementsByClassName('modal');
var btns = document.getElementsByClassName("openmodal");
var spans = document.getElementsByClassName("close");

let accessKey = 'c48fb2fc-1bd7-4453-a257-385b8b035372';


for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = async function () {
        var word = btns[i].textContent; 
        const response = await fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=' + accessKey);
        const formattedResponse = await response.json();

        for (let j = 0; j < formattedResponse.length; j++) {
            if (formattedResponse[j]["shortdef"] == null) {
                var node = document.createElement("LI");       
                var def = document.createTextNode("Hmm, looks like there isn't a definition for this word");
                node.appendChild(def); 
                document.getElementById(word).appendChild(node);
                break;
            }
            else {         
                var node = document.createElement("LI"); 
                var def = document.createTextNode(formattedResponse[j]["shortdef"][0]);
                node.appendChild(def); 
                document.getElementById(word).appendChild(node);
                if(j==10){
                    break;
                }
            }

        }
        
        modals[i].style.display = "block";
    }
} 


for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        modals[i].style.display = "none";
    }
}