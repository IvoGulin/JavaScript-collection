function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("demo26").innerHTML = myFunction(4, 3);

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("demo27").innerHTML = "The car type is " + car.type;

function fun()
{
	document.getElementById('demo28').innerHTML=Date();
}

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; 

document.getElementById("demo29").innerHTML =
answer1 + "<br>" + answer2 + "<br>" + answer3; 

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo30").innerHTML = text.length;