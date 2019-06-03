import React from "react";

const PlayKorobushka = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri == 1) {
      se4.play();
      alert("ダメです");
    } else {
      stopBGM();
      bgm3.load();
      bgm3.play();
    }
  }

  return (
    <button onClick={handleClick}>コロブチカを流す</button>
  );
}

export default PlayKorobushka;
