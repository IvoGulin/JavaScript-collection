const d = new Date(2018, 05, 35, 10, 33, 30, 0);
document.getElementById("demo31").innerHTML = d;

const f = new Date("2015-03-25T12:00:00Z");
document.getElementById("demo32").innerHTML = f;

const m = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("demo33").innerHTML = months[m.getMonth()];

document.getElementById("demo34").innerHTML = Math.round(4.4);

document.getElementById("demo35").innerHTML =
Math.floor(Math.random() * 10);