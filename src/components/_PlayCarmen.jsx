import React from "react";

const PlayCarmen = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri == 1) {
      se4.play();
      alert("ダメです");
    } else {
      stopBGM();
      bgm1.load();
      bgm1.play();
    }
  }

  return (
    <button onClick={handleClick}>カルメン組曲を流す</button>
  );
}

export default PlayCarmen;
