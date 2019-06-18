import React from "react";
import * as sounds from "../loadSounds.js";
import { total, animals } from "../usapyon_data";

const ShareButton = () => {
  const handleClick = e => {
    e.preventDefault();
    sounds.se.dame.play();
    alert("できません");
    total.tori++;
    localStorage.totalTori = total.tori;
    animals.tori++;
    if (animals.tori >= 5) {
      let usapriTimes = Number(localStorage.usapriTimes);
      usapriTimes++;
      localStorage.usapriTimes = usapriTimes;
      alert("鳥になりすぎです");
      window.location.href = "usapri.html";
      localStorage.usapri = true;
    }
  };

  return (
    <button style={{ fontSize: "100%" }} onClick={handleClick}>
      Twitterで共有
    </button>
  );
};

export default ShareButton;
