document.getElementById("demo41").innerHTML =
"100 is " + Boolean(100) + "<br>" +
"3.14 is " + Boolean(3.14) + "<br>" +
"-15 is " + Boolean(-15) + "<br>" +
"Any (not empty) string is " + Boolean("Hello") + "<br>" +
"Even the string 'false' is " + Boolean('false') + "<br>" +
"Any expression (except zero) is " + Boolean(1 + 7 + 3.14);

function myFunction() 
{
  let voteable;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) 
  {
    voteable = "Input is not a number";
  } 
  else 
  {
    voteable = (age < 18) ? "Too young" : "Old enough";
  }
  document.getElementById("demo42").innerHTML = voteable + " to vote";
}

if (new Date().getHours() < 18) {
  document.getElementById("demo43").innerHTML = "Good day!";  
}

const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo44").innerHTML = greeting;