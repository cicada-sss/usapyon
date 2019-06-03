import React from "react";

const MuteSE = () => {
  const handleClick = e => {
    e.preventDefault();
    se1.volume = 0;
    se2.volume = 0;
    se3.volume = 0;
    se4.volume = 0;
  }

  return (
    <button onClick={handleClick}>SEを消す（今プレイ中のみ）</button>
  );
}

export default MuteSE;
