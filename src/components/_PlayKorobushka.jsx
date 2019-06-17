import React from "react";
import * as sounds from "../loadSounds.js";

const PlayKorobushka = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri == 1) {
      sounds.se[3].play();
      alert("ダメです");
    } else {
      sounds.stopBGM();
      sounds.bgm[2].load();
      sounds.bgm[2].play();
    }
  };

  return <button onClick={handleClick}>コロブチカを流す</button>;
};

export default PlayKorobushka;
