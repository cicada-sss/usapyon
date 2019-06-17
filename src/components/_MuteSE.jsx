import React from "react";
import * as sounds from "../loadSounds.js";

const MuteSE = () => {
  const handleClick = e => {
    e.preventDefault();
    sounds.se[0].volume = 0;
    sounds.se[1].volume = 0;
    sounds.se[2].volume = 0;
    sounds.se[3].volume = 0;
  };

  return <button onClick={handleClick}>SEを消す（今プレイ中のみ）</button>;
};

export default MuteSE;
