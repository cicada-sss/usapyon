//BGM流す
document.getElementById("sound5").volume = 0.5;
document.getElementById("sound8").volume = 0.5;
document.getElementById("sound1").loop = true;
document.getElementById("sound5").loop = true;
document.getElementById("sound8").loop = true;
if (localStorage.usapri == 1) {
    document.getElementById("sound8").play();
} else {
    document.getElementById("sound5").play();
}

function muteSE() {
    document.getElementById("sound2").volume = 0;
    document.getElementById("sound4").volume = 0;
    document.getElementById("sound6").volume = 0;
    document.getElementById("sound7").volume = 0;
}

function muteBGM() {
    document.getElementById("sound1").volume = 0;
    document.getElementById("sound3").volume = 0;
    document.getElementById("sound5").volume = 0;
    document.getElementById("sound8").volume = 0;
}

function stopAll() {
    document.getElementById("sound1").pause();
    document.getElementById("sound2").pause();
    document.getElementById("sound3").pause();
    document.getElementById("sound4").pause();
    document.getElementById("sound5").pause();
    document.getElementById("sound6").pause();
    document.getElementById("sound7").pause();
    document.getElementById("sound8").pause();
}