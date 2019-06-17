const bgm = [
  new Audio("sound/carmen.mp3"),
  new Audio("sound/jupiter.mp3"),
  new Audio("sound/Коробейники.mp3"),
  new Audio("sound/usapri.mp3")
];

const se = [
  new Audio("sound/usa.mp3"),
  new Audio("sound/alert.mp3"),
  new Audio("sound/trumpet.mp3"),
  new Audio("sound/dame.mp3")
];

bgm[0].preload = "auto";
bgm[0].loop = true;
bgm[1].preload = "auto";
bgm[2].preload = "auto";
bgm[2].volume = 0.5;
bgm[2].loop = true;
bgm[3].preload = "auto";
bgm[3].volume = 0.5;
bgm[3].loop = true;
se[0].preload = "auto";
se[1].preload = "auto";
se[2].preload = "auto";
se[3].preload = "auto";

if (localStorage.usapri == 1) {
  bgm[3].play();
} else {
  bgm[2].play();
}

const stopBGM = () => {
  bgm[0].pause();
  bgm[1].pause();
  bgm[2].pause();
  bgm[3].pause();
};

export { bgm, se, stopBGM };
