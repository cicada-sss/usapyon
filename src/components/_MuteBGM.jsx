import React from "react";

const MuteBGM = () => {
  const handleClick = e => {
    e.preventDefault();
    bgm1.volume = 0;
    bgm2.volume = 0;
    bgm3.volume = 0;
    bgm4.volume = 0;
  }

  return (
    <button onClick={handleClick}>BGMを消す（今プレイ中のみ）</button>
  );
}

export default MuteBGM;
