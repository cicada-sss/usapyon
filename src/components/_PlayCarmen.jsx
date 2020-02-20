import React from "react";
import * as sounds from "../loadSounds.js";

const PlayCarmen = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri === true) {
      sounds.se.dame.play();
      alert("ダメです");
    } else {
      sounds.stopBGM();
      sounds.bgm.carmen.load();
      sounds.bgm.carmen.play();
    }
  };

  return <button onClick={handleClick}>カルメン組曲を流す</button>;
};

export default PlayCarmen;
