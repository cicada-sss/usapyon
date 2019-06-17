import React from "react";
import * as sounds from "./loadSounds.js";

const MuteBGM = () => {
  const handleClick = e => {
    e.preventDefault();
    sounds.bgm[0].volume = 0;
    sounds.bgm[1].volume = 0;
    sounds.bgm[2].volume = 0;
    sounds.bgm[3].volume = 0;
  };

  return <button onClick={handleClick}>BGMを消す（今プレイ中のみ）</button>;
};

export default MuteBGM;
