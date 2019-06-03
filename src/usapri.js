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
}

$(function() {
  var buttonSize = 405 - (usapriTimes + 1) * 5;
  $("#1").css({
    "font-size": buttonSize + "%"
  });
});

//0.1秒毎に状態チェック
setInterval(function() {
  if (usagi >= 1000) {
    localStorage.setItem("usapri", "0");
    alert("釈放します。\nもう戻ってきちゃダメですよ");
    window.location.href = "index.html";
  }
}, 100);
