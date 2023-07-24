var button = document.querySelector("#btn-click");
var textInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

function getTranslated(text) {
     return "https://api.funtranslations.com/translate/navi.json?text="+text; //the api url taken from funtranslations.com
}

function errorHandler(error){
     console.log("Server Error"); 
     alert("Server is not reachable!");
}

function clickEventHandler() {
     var txtVal= textInput.value;
     console.log(getTranslated(txtVal));
     fetch(getTranslated(txtVal)) //the fetch api is calling to fetch or request the URL's data from the server 
     .then(function responseHandler(response){ //then convering the response into a JSON file by using then()
          return response.json()
     })
     .then(function getJSON(json){//then to show the log of that JSON file by using then()
          output.innerText= json.contents.translated;
          console.log(json.contents.translated)
     })
     .catch(errorHandler) //we don't need to call errorHandler() because the fetch api library is providing the "error" argument inside the catch()
};
button.addEventListener("click", clickEventHandler); //callback to the function clickEventHandler