import React from "react";
import * as sounds from "./loadSounds.js";

const MuteBGM = () => {
  const handleClick = e => {
    e.preventDefault();
    sounds.bgm.carmen.volume = 0;
    sounds.bgm.jupiter.volume = 0;
    sounds.bgm.korobushka.volume = 0;
    sounds.bgm.usapri.volume = 0;
  };

  return <button onClick={handleClick}>BGMを消す（今プレイ中のみ）</button>;
};

export default MuteBGM;
