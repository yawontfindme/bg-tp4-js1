"use strict";

function f1() {
    let students = ["Etudiant1", "Etudiant2", "Etudiant3"];
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}

function f2() {
    let student = {
        name: "John",
        firstName: "DOE",
        age: 30,
    };
    console.log(student);
}

function f3() {
    let students = [
        { name: "nom1", firstName: "prenom1", age: 21},
        { name: "nom2", firstName: "prenom2", age: 22},
        { name: "nom3", firstName: "prenom3", age: 23},
    ];
    for (let i = 0; i < students.length; i++) {
        console.log(
            students[i].name + "-" + students[i].firstName + "-" + students[i].age
        );
    }
}

document.getElementById("btn1").addEventListener("click", f1);
document.getElementById("btn2").addEventListener("click", f2);
document.getElementById("btn3").addEventListener("click", f3);