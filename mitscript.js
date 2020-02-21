"use strict";

//SLIDESHOW
function gaaFremad() {
    if (billedIndeks < billedliste.length - 1) {
        billedIndeks++;
    } else {
        billedIndeks = 0;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

function gaaTilbage() {
    if (billedIndeks > 0) {
        billedIndeks--;
    } else {
        billedIndeks = 2; //Kan ændres til billedeliste.lenght-1 i stedet for 2. Så kan man tilføje flere billeder til sit slideshow, uden at ændre særligt meget andet.
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

// ------- Hovedprogram ---------
const billedliste = ["billed1.jpg", "loeve.jpg", "loevepar.jpg"];
let billedIndeks = 0;

document.getElementById("frem").addEventListener("click", function () {
    gaaFremad();
})

document.getElementById("tilbage").addEventListener("click", function () {
    gaaTilbage();
})
