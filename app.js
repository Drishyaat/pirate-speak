var txtInput=document.querySelector("#txt-input");
var btnTranslate=document.querySelector("#btn-translate");
var outputDiv=document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/pirate.json";
function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text;
}
 
function errorHandler(error)
{
    console.log("Error ocurred", error);
    alert("Something's wrong! Try again in some time");
}

function clickHandler()
{
    var inputText=  txtInput.value; // Taking input
    
    // Calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        outputDiv.innerText = translatedText; // output
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
