var button = document.querySelector("#btn-click");
var textInput=document.querySelector("#txt-input");
var output= document.querySelector("#output");

function clickEventHandler() {
     output.innerText= "Translated: "+textInput.value;
};
button.addEventListener("click", clickEventHandler); //callback to the function clickEventHandler
