var button = document.querySelector("#btn-click");
var textInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

function getTranslated(text) {
     return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="+text
}

function clickEventHandler() {
     // output.innerText = "Translated: " + textInput.value;
     var txtVal= textInput.value;
     fetch(getTranslated(txtVal)) //the fetch api is calling to fetch or request the URL's data from the server 
     .then(function responseHandler(response){ //then convering the response into a JSON file by using then()
          return response.json()
     })
     .then(function getJSON(json){//then to show the log of that JSON file by using then()
          console.log(json)
     })
}
button.addEventListener("click", clickEventHandler); //callback to the function clickEventHandler