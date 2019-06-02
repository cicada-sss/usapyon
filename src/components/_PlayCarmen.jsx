import React from "react";

const PlayCarmen = () => {
  handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri == 1) {
      document.getElementById("sound7").play();
      alert("ダメです");
    } else {
      stopAll();
      document.getElementById("sound1").currentTime = 0;
      document.getElementById("sound1").play();
    }
  }

  return (
    <button onClick={handleClick}>カルメン組曲を流す</button>
  );
}

export default PlayCarmen;
