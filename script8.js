const d = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("demo36").innerHTML = months[d.getMonth()];

let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

document.getElementById("demo37").innerHTML = text;

document.getElementById("demo38").innerHTML = 
"The sine value of 90 degrees is " + Math.sin(90 * Math.PI / 180);

document.getElementById("demo39").innerHTML =
Math.floor(Math.random() * 11);

document.getElementById("demo40").innerHTML = 10 > 9;