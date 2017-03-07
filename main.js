console.log("first line in JS file", Date.now());

var dinoContainer = document.getElementById("dinoContainer");

function makeDom(xhrData) {
	var dinosaursString = "";
	var currentDinosaur;
	for(var i=0; i<xhrData.dinosaurs.length; i++){
		currentDinosaur = xhrData.dinosaurs[i];
	
	  dinosaursString += `<div class="col-sm-6 col-md-4">`; //copied and pasted from bootstrap 
	  dinosaursString += `<div class="thumbnail">`; // must use your "`" tick marks
	  dinosaursString += `<img src="${currentDinosaur.url}" alt="dino">`;
	  dinosaursString += `<div class="caption">`;
	  dinosaursString += `<h3>${currentDinosaur.name}</h3>`;
	  dinosaursString += `<p>Is a ${currentDinosaur.type}</p>`;
	  dinosaursString += `<p>Likes to eat: ${currentDinosaur.food}</p>`;
	  dinosaursString += `</div></div></div>`
	}
	dinoContainer.innerHTML = dinosaursString;
}


function executeThisCodeAfterFileLoaded(){
	console.log("Data Returned: ", Date.now());
	var data =JSON.parse(this.responseText);
	// console.log("it worked!", data);
	makeDom(data);
}


//error is not neccesary but it is good practice. if incorrect request or 

function executeThisCodeAfterFileFails(){
	console.log("it DID NOT worked!")
}


var myRequest = new XMLHttpRequest();
//add things with dot notation to an event listener. 

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); // happens when the file has completed reading the JSON file
myRequest.addEventListener("error", executeThisCodeAfterFileFails);

// How to get into the file. we are "GET" it ...
//GET, POST, PUT, DElETE
//this just initailizes the request GEt request "open and not execute"

myRequest.open("GET", "dinosaurs.json"); // HW this is where your tree house profile link will go.... 


//makes request happen, sue the "send" method to execute  

myRequest.send();

console.log("last line in JS file", Date.now());

// console to see the call or request

// console.log("myRequest", myRequest);

// for a request you will always have 5 lines of code at least ... And MUST be in this order.


// Constructor -- is like an object ... "new" gives a copy of the thing at the start .. 
// functions only need to applly to the request we are making. 
// "new" creates a copy and you can add things to the copy. 
