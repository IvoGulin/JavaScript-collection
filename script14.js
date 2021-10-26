function fun1()
{
	// Create an object:
	const person = {
	  firstName: "John",
	  lastName: "Doe",
	  id: 5566,
	  fullName : function() {
		return this.firstName + " " + this.lastName;
	  }
	};

	// Display data from the object:
	document.getElementById("demo66").innerHTML = person.fullName();
}
function fun2()
{
	var hello;

	hello = () => {
	  return "Hello World!";
	}

	document.getElementById("demo67").innerHTML = hello(); 
}
function fun3 ()
{
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo68").innerHTML =
myCar.name + " " + myCar.year;
}

class Car {
  constructor(name, year, color, tyres) 
  {
    this.name = name;
    this.year = year;
    this.color = color;
    this.tyres = tyres;
  }
}
function fun4()
{
const myCar = new Car("Ford", 2014, "red", 4);
document.getElementById("demo69").innerHTML =
myCar.name + " " + myCar.year + " " + myCar.color + " " + myCar.tyres;
}
function fun5()
{
let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo70").innerHTML =
obj.employees[2].firstName + " " + obj.employees[2].lastName;
}