"use strict";

function B(note) {
    return note >= 10;
}

function A() {
    let students = [
        [1000, "John", "Doe", 14, 5],
        [2000, "Bob", "Carlton", 7, 1],
        [3000, "Rayane", "Smith", 13, 3],
    ];

    for (let i = 0; i < students.length; i++) {
        let resultat = B(students[i][3]);

        if (resultat) {
            console.log(students[i][0] + ": ADMIS");
        } else {
            console.log(students[i][0] + ": AJOURNE");
        }
    }
}

document.getElementById("btn1").addEventListener("click", A);