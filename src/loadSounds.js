const bgm = {
  carmen: new Audio("sound/carmen.mp3"),
  jupiter: new Audio("sound/jupiter.mp3"),
  korobushka: new Audio("sound/Коробейники.mp3"),
  usapri: new Audio("sound/usapri.mp3")
};

const se = {
  usafuya: new Audio("sound/usa.mp3"),
  alert: new Audio("sound/alert.mp3"),
  trumpet: new Audio("sound/trumpet.mp3"),
  dame: new Audio("sound/dame.mp3")
};

bgm.carmen.preload = "auto";
bgm.carmen.loop = true;
bgm.jupiter.preload = "auto";
bgm.korobushka.preload = "auto";
bgm.korobushka.volume = 0.5;
bgm.korobushka.loop = true;
bgm.usapri.preload = "auto";
bgm.usapri.volume = 0.5;
bgm.usapri.loop = true;
se.usafuya.preload = "auto";
se.alert.preload = "auto";
se.trumpet.preload = "auto";
se.dame.preload = "auto";

if (localStorage.usapri == 1) {
  bgm.usapri.play();
} else {
  bgm.korobushka.play();
}

const stopBGM = () => {
  bgm.carmen.pause();
  bgm.jupiter.pause();
  bgm.korobushka.pause();
  bgm.usapri.pause();
};

export { bgm, se, stopBGM };
