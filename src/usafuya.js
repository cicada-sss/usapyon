let usafuya = () => {
  se1.currentTime = 0;
  se1.play();
  let makeRandom = (randomNumber, ifFloor) => {
    if (ifFloor === true) {
      return Math.floor(Math.random() * randomNumber);
    } else {
      return Math.random() * randomNumber;
    }
  };
  let usagifuya = () => {
    usasrc = usaran[makeRandom(usaran.length, true)];
    usagi++;
  };
  let sW = makeRandom(window.innerWidth + 60, true) - 30;
  let sH = makeRandom(window.innerHeight + 100, true) - 50;
  switch (makeRandom(101, true)) {
    case 0:
      usasrc = "image/risu.png";
      risu++;
      break;
    case 1:
      usasrc = "image/kuma.png";
      kuma++;
      break;
    case 2:
      switch (makeRandom(21, true)) {
        case 0:
          se3.currentTime = 0;
          se3.play();
          usasrc = "image/aja.png";
          aja++;
          break;
        default:
          usagifuya();
          break;
      }
      break;
    default:
      usagifuya();
      break;
  }
  creimg = document.createElement("img");
  creimg.setAttribute("src", usasrc);
  creimg.setAttribute(
    "style",
    "position:fixed; top:" + sH + "px; left:" + sW + "px;"
  );
  document.body.appendChild(creimg);
};
