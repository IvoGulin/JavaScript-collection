function pricelist()
{
	const fruits = new Map([["apples", 500],["bananas", 300],["oranges", 200]]);
	document.getElementById("demo56").innerHTML = fruits.get("apples");
}
function variable()
{
	var x = 67;
	document.getElementById("demo57").innerHTML = 
	typeof "john" + "<br>" + 
	typeof 3.14 + "<br>" +
	typeof true + "<br>" +
	typeof false + "<br>" +
	typeof x;
}
function old()
{
	document.getElementById("demo58").innerHTML = 
	typeof {name:'john', age:34} + "<br>" +
	typeof [1,2,3,4] + "<br>" +
	typeof null + "<br>" +
	typeof function myFunc(){};
}
function number()
{
		document.getElementById("demo59").innerHTML =
	(5 + null) + "<br>"  +
	("5" + null) + "<br>" +
	("5" + 2) + "<br>" +
	("5" - 2) + "<br>" +
	("5" * "2") + "<br>" +
	("5" / "2") + "<br>"
}
function more()
{
document.getElementById("demo60").innerHTML = 5 ^ 1;
}