# banana-speak-vanillaJS
JavaScript in Browser

prompt= get user data from the user in the console and also it is usable in the alert
alert= get the output as an alert box in the browser
querySelector() this method returns the element or a group of elements of a selector in web document
EventListener basically catches those events made by users like touching, clicking, scrolling etc

What will be the query you would write for each one below? Select the first…

1. textarea tag
2. element with a class btn-primary
3. element with an id input-btn
4. input element with an attribute name=‘translator’

ans: 

document.querySelector("input");
document.querySelector(".btn-primary");
document.querySelector("#input-btn");
document.querySelector("input[name='translator']");

Wire a div to show output
1. create an output div
2. references it in JS
3. use innerText to rewrite this div dynamically to show the output

Understand promises

Promises are a way of handling asynchronous operations in JavaScript. They are objects that represent the eventual completion or failure of an asynchronous task.
One common use case for promises is fetching data from a remote server. For example, you can use the fetch() method to make an HTTP request and get a promise as a response.

fetch('https://example.com/data.json')
  .then(response => response.json()) // convert the response to JSON
  .then(data => console.log(data)) // do something with the data
  .catch(error => console.error(error)) // handle any errors

The then() method takes a callback function that runs when the promise is fulfilled. The catch() method takes a callback function that runs when the promise is rejected.

Note: Understanding promises is very important for any web developer. You will encounter them a lot in your projects and interviews. Make sure you practice them well and learn how to use them effectively.