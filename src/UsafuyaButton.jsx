import React from "react";
import ReactDOM from "react-dom";

const UsafuyaButton = () => {
  const handleClick = e => {
    e.preventDefault();
    let usasrc;
    se1.currentTime = 0;
    se1.play();
    let makeRandom = (randomNumber, ifFloor) => {
      if (ifFloor === true) {
        return Math.floor(Math.random() * randomNumber);
      } else {
        return Math.random() * randomNumber;
      }
    };
    let usagifuya = () => {
      usagi++;
      return usaran[makeRandom(usaran.length, true)];
    };
    let sW = makeRandom(window.innerWidth + 60, true) - 30;
    let sH = makeRandom(window.innerHeight + 100, true) - 50;
    if (localStorage.usapri === "1") {
      switch (makeRandom(2001, true)) {
        case 0:
        se3.currentTime = 0;
        se3.play();
          usasrc = "image/aja.png";
          aja++;
          localStorage.setItem("usapri", "0");
          localStorage.setItem("usapriTimes", usapriTimes);
          alert("あじゃが助け出してくれました");
          window.location.href = "index.html";
          break;
        default:
          usasrc = usaran[Math.floor(Math.random() * usaran.length)];
          usagi++;
          break;
      }
    } else {
      switch (makeRandom(101, true)) {
        case 0:
          usasrc = "image/risu.png";
          risu++;
          break;
        case 1:
          usasrc = "image/kuma.png";
          kuma++;
          break;
        case 2:
          switch (makeRandom(21, true)) {
            case 0:
              se3.currentTime = 0;
              se3.play();
              usasrc = "image/aja.png";
              aja++;
              break;
            default:
              usasrc = usagifuya();
              break;
          }
          break;
        default:
          usasrc = usagifuya();
          break;
      }
    }
    creimg = document.createElement("img");
    creimg.setAttribute("src", usasrc);
    creimg.setAttribute(
      "style",
      "position:fixed; top:" + sH + "px; left:" + sW + "px;"
    );
    document.body.appendChild(creimg);
  };

  return (
    <button style={{ fontSize: "500%" }} onClick={handleClick}>
      うさぎを増やす
    </button>
  );
};

ReactDOM.render(<UsafuyaButton />, document.getElementById("usafuya-button"));

setInterval(function() {
  if (usagi >= 500 * n2 && localStorage.usapri !== "1") {
    var bleft = $("#usafuya-button").offset().left;
    var btop = $("#usafuya-button").offset().top;
    document
      .getElementById("usafuya-button")
      .parentNode.removeChild(document.getElementById("usafuya-button"));
    var k = document.createElement("div");
    k.setAttribute("id", "usafuya-button");
    k.setAttribute(
      "style",
      "position:fixed; top:" + btop + "px; left:" + bleft + "px;"
    );
    document.body.appendChild(k);
    n2++;
    ReactDOM.render(
      <UsafuyaButton />,
      document.getElementById("usafuya-button")
    );
  }
}, 100);
