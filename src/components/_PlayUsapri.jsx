import React from "react";

const PlayUsapri = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapriTimes == 0) {
      se4.play();
      alert("聴いたことがないのでダメです");
    } else {
      stopBGM();
      bgm4.load();
      bgm4.play();
    }
  }

  return (
    <button onClick={handleClick}>交響曲を流す</button>
  );
}

export default PlayUsapri;
