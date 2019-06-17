import React from "react";
import * as sounds from "../loadSounds.js";

const MuteSE = () => {
  const handleClick = e => {
    e.preventDefault();
    sounds.se.usafuya.volume = 0;
    sounds.se.alert.volume = 0;
    sounds.se.trumpet.volume = 0;
    sounds.se.dame.volume = 0;
  };

  return <button onClick={handleClick}>SEを消す（今プレイ中のみ）</button>;
};

export default MuteSE;
