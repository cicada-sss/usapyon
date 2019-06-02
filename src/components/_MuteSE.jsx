import React from "react";

function MuteSE() {
  function handleClick(e) {
    e.preventDefault();
    document.getElementById("sound2").volume = 0;
    document.getElementById("sound4").volume = 0;
    document.getElementById("sound6").volume = 0;
    document.getElementById("sound7").volume = 0;
  }

  return (
    <button onClick={handleClick}>SEを消す（今プレイ中のみ）</button>
  );
}

export default MuteSE;
