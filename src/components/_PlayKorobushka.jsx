import React from "react";

const PlayKorobushka = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri == 1) {
      document.getElementById("sound7").play();
      alert("ダメです");
    } else {
      stopAll();
      document.getElementById("sound5").currentTime = 0;
      document.getElementById("sound5").play();
    }
  }

  return (
    <button onClick={handleClick}>コロブチカを流す</button>
  );
}

export default PlayKorobushka;
