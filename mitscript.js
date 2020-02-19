"use strict";

//INTRO VIDEO
/*var video = document.getElementById("video")

document.getElementById("video").on('mouseenter', function () {
    document.getElementById("video").get(0).play();
});

document.getElementById("video").on('mouseout', function () {
    document.getElementById("video").get(0).pause();
});*/

var vid = document.getElementById("video");

function enableLoop() {
    vid.loop = true;
    vid.load();
}
