function fun1() 
{
	let text = "Visit W3Schools!"; 
	let n = text.search(/w3Schools/i);
	document.getElementById("demo61").innerHTML = n;
}

function fun2()
{
	try 
	{
		allert("Welcome guest!");
	}
	catch(err) 
	{
		document.getElementById("demo62").innerHTML = err.message;
	}
}

function fun3() 
{
	let carName = "Volvo";
	document.getElementById("demo63").innerHTML = "I can display " + carName;

}

function fun4()
{
	var x; // Declare x
	x = 5; // Assign 5 to x

	elem = document.getElementById("demo64"); // Find an element 
	elem.innerHTML = x;           // Display x in the element
}

function fun5()
{
	let text = '{"employees":[' +
	'{"firstName":"John","lastName":"Doe" },' +
	'{"firstName":"Anna","lastName":"Smith" },' +
	'{"firstName":"Peter","lastName":"Jones" }]}';

	const obj = JSON.parse(text);
	document.getElementById("demo65").innerHTML =
	obj.employees[1].firstName + " " + obj.employees[1].lastName;
}