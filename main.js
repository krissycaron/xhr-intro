// console.log("hello");


function executeThisCodeAfterFileLoaded(){
	console.log("it worked!")
}


//error is not neccesary but it is good practice. if incorrect request or 

function executeThisCodeAfterFileFails(){
	console.log("it DID NOT worked!")
}


var myRequest = new XMLHttpRequest();
//add things with dot notation to an event listener. 

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);

// How to get into the file. we are "GET" it ...
//GET, POST, PUT, DElETE
//this just initailizes the request GEt request "open and not execute"

myRequest.open("GET", "dinosaurs.json");

//makes request happen, sue the "send" method to execute  

myRequest.send();

// console to see the call or request

console.log("myRequest", myRequest);

// for a request you will always have 5 lines of code at least ... And MUST be in this order.


// Constructor -- is like an object ... "new" gives a copy of the thing at the start .. 
// functions only need to applly to the request we are making. 
// "new" creates a copy and you can add things to the copy. 
