function addNumbers()
{
	firstNumber = 5;
	secondNumber = 6;
	
	result = firstNumber + secondNumber;
	
	document.getElementById("demo71").innerHTML = result;
}
function addition()
{
	let x = 0.1;
	let y = 0.2;
	
	let z = x + y;
	
	document.getElementById("demo72").innerHTML = z.toFixed(2);
}
function suma()
{
	const person = [];
	person[0] = "John";
	person[1] = "Doe";
	person[2] = 46; 
	document.getElementById("demo73").innerHTML =
	person[0] + " " + person.length;
}


const x = document.getElementById("demo74");

function getLocation() 
{
  if (navigator.geolocation) 
  {
	navigator.geolocation.getCurrentPosition(showPosition);
  } 
  else 
  { 
	x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) 
{
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
function myFunction() {
  alert("I am an alert box!");
}