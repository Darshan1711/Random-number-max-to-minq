function btn(){

let num1 = parseInt(document.getElementById("num1").value);
let num2 = parseInt(document.getElementById("num2").value);

let final = Math.random() * (num1 - num2) + num2;

document.getElementById("s1").innerHTML = `Random number is : ${final.toFixed()}`;
}