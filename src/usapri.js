if (localStorage.usapri != 1) {
  alert("入ってはいけません");
  window.location.href = "index.html";
}
//初期化
se1.defaultPlaybackRate = 0.3;
if (!localStorage.getItem("usapriTimes")) {
  var usapriTimes = 0;
} else {
  var usapriTimes = Number(localStorage.getItem("usapriTimes"));
  console.log(usapriTimes);
}
$(function() {
  var buttonSize = 405 - (usapriTimes + 1) * 5;
  $("#1").css({
    "font-size": buttonSize + "%"
  });
  console.log(buttonSize);
});

function usafuya() {
  se1.currentTime = 0;
  se1.play();
  var sW2 = window.innerWidth + 60;
  var sH2 = window.innerHeight + 100;
  var sW = Math.floor(Math.random() * sW2) - 30;
  var sH = Math.floor(Math.random() * sH2) - 50;
  var ran = Math.floor(Math.random() * 2001);
  switch (ran) {
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
  creimg = document.createElement("img");
  creimg.setAttribute("src", usasrc);
  creimg.setAttribute(
    "style",
    "position:fixed; top:" + sH + "px; left:" + sW + "px;"
  );
  document.body.appendChild(creimg);
}
//0.1秒毎に状態チェック
setInterval(function() {
  if (usagi >= 1000) {
    usapriBreak();
  }
}, 100);

function usapriBreak() {
  localStorage.setItem("usapri", "0");

  alert("釈放します。\nもう戻ってきちゃダメですよ");
  window.location.href = "index.html";
}
