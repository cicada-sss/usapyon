let bgm1 = new Audio("sound/carmen.mp3");
bgm1.preload = "auto";
bgm1.loop = true;
let bgm2 = new Audio("sound/jupiter.mp3");
bgm2.preload = "auto";
let bgm3 = new Audio("sound/Коробейники.mp3");
bgm3.preload = "auto";
bgm3.volume = 0.5;
bgm3.loop = true;
let bgm4 = new Audio("sound/usapri.mp3");
bgm4.preload = "auto";
bgm4.volume = 0.5;
bgm4.loop = true;
let se1 = new Audio("sound/usa.mp3");
se1.preload = "auto";
let se2 = new Audio("sound/alert.mp3");
se2.preload = "auto";
let se3 = new Audio("sound/trumpet.mp3");
se3.preload = "auto";
let se4 = new Audio("sound/dame.mp3");
se4.preload = "auto";
if (localStorage.usapri == 1) {
  bgm4.play();
} else {
  bgm3.play();
}

let stopBGM = () => {
  bgm1.pause();
  bgm2.pause();
  bgm3.pause();
  bgm4.pause();
}