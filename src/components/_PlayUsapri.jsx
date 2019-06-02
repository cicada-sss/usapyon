import React from "react";

const PlayUsapri = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapriTimes == 0) {
      document.getElementById("sound7").play();
      alert("聴いたことがないのでダメです");
    } else {
      stopAll();
      document.getElementById("sound8").currentTime = 0;
      document.getElementById("sound8").play();
    }
  }

  return (
    <button onClick={handleClick}>交響曲を流す</button>
  );
}

export default PlayUsapri;
