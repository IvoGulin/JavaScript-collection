function piki()
{
	const cars = ["BMW", "Volvo", "Saab", "Ford"];
	let i, len, text;
	for (i = 0, len = cars.length, text = ""; i < len; i++) 
	{
	  text += cars[i] + "<br>";
	}
	document.getElementById("demo46").innerHTML = text;
}

function ciki()
{
	const person = {fname:"John", lname:"Doe", age:25, position: "single"}; 

	let txt3 = "";
	for (let x in person) 
	{
		txt3 += person[x] + " ";
	}

	document.getElementById("demo47").innerHTML = txt3;
}

function ziki()
{
	const numbers = [45, 4, 9, 16, 25];

	let mxt = "";
	numbers.forEach(myFunction);
	document.getElementById("demo48").innerHTML = mxt;

	function myFunction(value, index, array) 
	{
		mxt += value + "<br>"; 
	}
}

function miki()
{
	const cars1 = ["BMW", "Volvo", "Mini"];

	let text1 = "";
	for (let c of cars1) 
	{
	  text1 += c + "<br>";
	}

	document.getElementById("demo49").innerHTML = text1;
}

function kiki()
{
	const one = {fname:"John", lname:"Doe", age:25}; 

	let txt2 = "";
	for (let z in one) 
	{
	  txt2 += one[z] + " ";
	}
	document.getElementById("demo50").innerHTML = txt2;
}