var button = document.querySelector("#btn-click");
var textInput=document.querySelector("#txt-input");

function clickEventHandler() {
    console.log("Clicked!");
    console.log(textInput.value);
};
button.addEventListener("click", clickEventHandler); //callback to the function clickEventHandler
