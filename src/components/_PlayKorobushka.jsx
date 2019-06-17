import React from "react";
import * as sounds from "../loadSounds.js";

const PlayKorobushka = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri == 1) {
      sounds.se.dame.play();
      alert("ダメです");
    } else {
      sounds.stopBGM();
      sounds.bgm.korobushka.load();
      sounds.bgm.korobushka.play();
    }
  };

  return <button onClick={handleClick}>コロブチカを流す</button>;
};

export default PlayKorobushka;
