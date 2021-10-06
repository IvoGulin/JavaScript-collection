function piki()
{
	let text = "";
	let i = 0;
	while (i < 10) 
	{
		text += "<br>The number is " + i;
		i++;
	}
	document.getElementById("demo51").innerHTML = text;
}
function giki()
{
	let text = ""
	let i = 0;

	do {
	  text += "<br>The number is " + i;
	  i++;
	}
	while (i < 10);  

    document.getElementById("demo52").innerHTML = text;
}
function hiki()
{
	let text = "";
	for (let i = 0; i < 10; i++) {
	  if (i === 3) { break; }
	  text += "The number is " + i + "<br>";
	}

	document.getElementById("demo53").innerHTML = text;
}
function fiki()
{
	// Create a String
	const name = "W3Schools";

	// List all Elements
	let text5 = ""
	for (const x of name) {
	  text5 += x + "<br>";
	}

    document.getElementById("demo54").innerHTML = text5;
}
function riki()
{
	// Create a Set
	const letters = new Set();

	// Add Values to the Set
	letters.add("a");
	letters.add("b");
	letters.add("c");
	letters.add("d");

	// Display set.size
    document.getElementById("demo55").innerHTML = letters.size;	
}