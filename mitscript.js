"use strict";
//SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

//LYDOPTAGELSER

const sofie = new Audio("sound/sofie.mp3");

document.getElementById("sofie").addEventListener("click", event => {
    if (!sofie.paused) {
        sofie.pause();
    } else {
        sofie.play();
    }

});

const muhammed = new Audio("sound/muhammed.mp3");

document.getElementById("muhammed").addEventListener("click", event => {
    if (!muhammed.paused) {
        muhammed.pause();
    } else {
        muhammed.play();
    }

});

const sandra = new Audio("sound/sandra.mp3");

document.getElementById("sandra").addEventListener("click", event => {
    if (!sandra.paused) {
        sandra.pause();
    } else {
        sandra.play();
    }

});
