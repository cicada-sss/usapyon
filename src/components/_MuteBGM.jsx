import React from "react";

const MuteBGM = () => {
  handleClick = e => {
    e.preventDefault();
    document.getElementById("sound1").volume = 0;
    document.getElementById("sound3").volume = 0;
    document.getElementById("sound5").volume = 0;
    document.getElementById("sound8").volume = 0;
  }

  return (
    <button onClick={handleClick}>BGMを消す（今プレイ中のみ）</button>
  );
}

export default MuteBGM;
