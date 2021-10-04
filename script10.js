const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo46").innerHTML = text;

const person = {fname:"John", lname:"Doe", age:25, position: "single"}; 

let txt = "";
for (let x in person) 
{
  txt += person[x] + " ";
}

document.getElementById("demo47").innerHTML = txt;

const numbers = [45, 4, 9, 16, 25];

let mxt = "";
numbers.forEach(myFunction);
document.getElementById("demo48").innerHTML = mxt;

function myFunction(value, index, array) {
  mxt += value + "<br>"; 
}

const cars1 = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let c of cars1) {
  text1 += c + "<br>";
}

document.getElementById("demo49").innerHTML = text1;