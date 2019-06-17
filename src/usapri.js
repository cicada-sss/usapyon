if (localStorage.usapri === false) {
  alert("入ってはいけません");
  window.location.href = "index.html";
}

// 初期化
se.usafuya.defaultPlaybackRate = 0.3;
if (!localStorage.usapriTimes) {
  let usapriTimes = 0;
} else {
  let usapriTimes = Number(localStorage.usapriTimes);
}

$(() => {
  const buttonSize = 405 - (usapriTimes + 1) * 5;
  $("#1").css({ "font-size": `${buttonSize}%` });
});

// 0.1秒毎に状態チェック
setInterval(() => {
  if (animals.usagi >= 1000) {
    localStorage.usapri = false;
    alert("釈放します。\nもう戻ってきちゃダメですよ");
    window.location.href = "index.html";
  }
}, 100);
