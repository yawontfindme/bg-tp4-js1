"use strict";

function f1() {
    console.log("John");
}

function f2() {
    console.log("Doe");
}

function f3() {
    console.log("John Doe");
}

function f4() {
    console.log(30);
}

function f5() {
    console.log(15);
}

function f6() {
    console.log(3.14);
}

document.getElementById("btn1").addEventListener("click", f1);
document.getElementById("btn2").addEventListener("click", f2);
document.getElementById("btn3").addEventListener("click", f3);
document.getElementById("btn4").addEventListener("click", f4);
document.getElementById("btn5").addEventListener("click", f5);
document.getElementById("btn6").addEventListener("click", f6);