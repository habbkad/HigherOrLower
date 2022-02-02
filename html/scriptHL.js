
let ranNumber = Math.floor(Math.random() * 11);
let numInput;

function changeText(){
	numInput= document.getElementById("inputNum").value;
	console.log(numInput);

	if (ranNumber == numInput) {
		
		document.getElementById("heading").innerHTML="Hurray"

	}else if (numInput < ranNumber) {


		alert("Go higher")

	}else if( numInput > ranNumber){

		alert("Go lower")

	}else{

		document.getElementById("heading").innerHTML="Hurray"

	}

	 

}

