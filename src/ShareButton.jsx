import React from "react";
import ReactDOM from "react-dom";

const ShareButton = () => {
  const handleClick = e => {
    e.preventDefault();
    se4.play();
    alert("できません");
    total.tori++;
    localStorage.setItem("totalTori", total.tori);
    animals.tori++;
    if (animals.tori >= 5) {
      var usapriTimes = Number(localStorage.getItem("usapriTimes"));
      usapriTimes++;
      localStorage.setItem("usapriTimes", usapriTimes);
      alert("鳥になりすぎです");
      window.location.href = "usapri.html";
      localStorage.setItem("usapri", 1);
    }
  };

  return (
    <button style={{ fontSize: "100%" }} onClick={handleClick}>
      Twitterで共有
    </button>
  );
};

ReactDOM.render(<ShareButton />, document.getElementById("share-button"));
