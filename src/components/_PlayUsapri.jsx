import React from "react";
import * as sounds from "../loadSounds.js";

const PlayUsapri = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapriTimes == 0) {
      sounds.se[3].play();
      alert("聴いたことがないのでダメです");
    } else {
      sounds.stopBGM();
      sounds.bgm[3].load();
      sounds.bgm[3].play();
    }
  };

  return <button onClick={handleClick}>交響曲を流す</button>;
};

export default PlayUsapri;
