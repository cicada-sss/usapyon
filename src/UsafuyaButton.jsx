import React from "react";
import ReactDOM from "react-dom";

const UsafuyaButton = () => {
  const handleClick = e => {
    e.preventDefault();
    let usasrc;
    var usaran = [
      "image/usa (1).png",
      "image/usa (2).png",
      "image/usa (3).png",
      "image/usa (4).png",
      "image/usa (5).png",
      "image/usa (6).png",
      "image/usa (7).png"
    ];
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
          animals.aja++;
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
          animals.risu++;
          break;
        case 1:
          usasrc = "image/kuma.png";
          animals.kuma++;
          break;
        case 2:
          switch (makeRandom(21, true)) {
            case 0:
              se3.currentTime = 0;
              se3.play();
              usasrc = "image/aja.png";
              animals.aja++;
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
    let creimg = document.createElement("img");
    creimg.setAttribute("src", usasrc);
    creimg.setAttribute(
      "style",
      "position:fixed; top:" + sH + "px; left:" + sW + "px;"
    );
    document.body.appendChild(creimg);
    // うさぎが10000匹を超えた場合ジュピターを流してスタッフロールを表示
    if (usagi === 10000) {
      stopBGM();
      bgm2.play();
      var b = document.createElement("img");
      b.setAttribute("src", "image/staff.png");
      b.setAttribute("id", "staff");
      b.setAttribute(
        "style",
        "text-align:center; position:fixed; bottom:0px; left:200px;z-index:9999;opacity:0.9; max-width:50%;margin:0 auto;"
      );
      document.body.appendChild(b);
      $("#staff").animate(
        {
          top: "50px"
        },
        20000
      );
      // うさぎが1000匹を超える毎に大漁を表示しカルメン組曲を再生
    } else if (usagi % 1000 === 0) {
      stopBGM();
      bgm1.load();
      bgm1.play();
      creimg = document.createElement("img");
      creimg.setAttribute("src", "image/tairyou.png");
      creimg.setAttribute("style", "position:fixed; bottom:10px; right:10px;");
      document.body.appendChild(creimg);
      animals.tairyou++;
    } else if (usagi % 500 === 0 && localStorage.usapri !== "1") {
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
      ReactDOM.render(
        <UsafuyaButton />,
        document.getElementById("usafuya-button")
      );
    }
  };

  return (
    <button style={{ fontSize: "500%" }} onClick={handleClick}>
      うさぎを増やす
    </button>
  );
};

ReactDOM.render(<UsafuyaButton />, document.getElementById("usafuya-button"));
