//BGM流す
document.getElementById("sound5").volume = 0.5;
document.getElementById("sound8").volume = 0.5;
document.getElementById("sound1").loop = true;
document.getElementById("sound5").loop = true;
document.getElementById("sound8").loop = true;
if (localStorage.usapri == 1) {
  document.getElementById("sound8").play();
} else {
  document.getElementById("sound5").play();
}

function stopAll() {
  document.getElementById("sound1").pause();
  document.getElementById("sound2").pause();
  document.getElementById("sound3").pause();
  document.getElementById("sound4").pause();
  document.getElementById("sound5").pause();
  document.getElementById("sound6").pause();
  document.getElementById("sound7").pause();
  document.getElementById("sound8").pause();
}

$("#del").click(function() {
  if (localStorage.usapri == 1) {
    alert("消せません");
  } else {
    var del = confirm("全てのデータを初期化します。よろしいですか？");
    if (del) {
      localStorage.clear();
      clearInterval(setInterval(achievement, 10));
      location.reload();
    }
  }
});

$("#version").html("ver.1.1.1β");

$("#version").click(function() {
  $("#credit").fadeToggle();
});

$("#1").click(function() {
  usafuya();
});

$(window).keydown(function() {
  return false;
});
