let x = 5;
document.getElementById("demo21").innerHTML = Math.pow(x,2);

let y = 10;
y *= 5;
document.getElementById("demo22").innerHTML = y;

let c = 16 + 4 + "Volvo";
document.getElementById("demo23").innerHTML = c;

const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

document.getElementById("demo24").innerHTML =
person.firstName + " is " + person.age + " years old.";

function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo25").innerHTML = toCelsius(77);


