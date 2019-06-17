import React from "react";
import * as sounds from "../loadSounds.js";

const PlayCarmen = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri == 1) {
      sounds.se[3].play();
      alert("ダメです");
    } else {
      sounds.stopBGM();
      sounds.bgm[0].load();
      sounds.bgm[0].play();
    }
  };

  return <button onClick={handleClick}>カルメン組曲を流す</button>;
};

export default PlayCarmen;
