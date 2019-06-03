var usagi = 0;
var kuma = 0;
var risu = 0;
var aja = 0;
var tori = 0;
var tairyou = 0;
var n = 1;
var n2 = 1;
var no = 1;
var creimg;
var usaran = [
  "image/usa (1).png",
  "image/usa (2).png",
  "image/usa (3).png",
  "image/usa (4).png",
  "image/usa (5).png",
  "image/usa (6).png",
  "image/usa (7).png"
];

//データ読み込み
var launchTimes = localStorage.getItem("launchTimes");

var launchTime = Math.floor(Date.now() / 1000);

////初回プレイの場合
if (!localStorage.getItem("launchTimes")) {
  localStorage.clear();
  localStorage.setItem("launchTimes", 1);
  localStorage.setItem("totalUsagi", 0);
  localStorage.setItem("totalKuma", 0);
  localStorage.setItem("totalRisu", 0);
  localStorage.setItem("totalAja", 0);
  localStorage.setItem("totalTori", 0);
  var totalUsagi = 0;
  var totalKuma = 0;
  var totalRisu = 0;
  var totalAja = 0;
  var totalTori = 0;
  var launchTimes = 1;
  var infotext = "初回プレイです";
  $(document).ready(function() {
    $("#info").html(infotext);
    setTimeout(function() {
      $("#info").fadeOut("slow");
      infotext = "";
    }, 5000);
  });
} else {
  ////二回目以降の場合
  var totalUsagi = Number(localStorage.getItem("totalUsagi"));
  var totalKuma = Number(localStorage.getItem("totalKuma"));
  var totalRisu = Number(localStorage.getItem("totalRisu"));
  var totalAja = Number(localStorage.getItem("totalAja"));
  var totalTori = Number(localStorage.getItem("totalTori"));
  var totalTairyou = Number(localStorage.getItem("totalTairyou"));
  if (localStorage.usapri != 1) {
    launchTimes++;
    localStorage.setItem("launchTimes", launchTimes);
    var infotext = launchTimes + "回目のプレイです";
  } else {
    var infotext = "あなたはうさプリに入れられました";
  }
  infotext =
    infotext + "<br>\n今まで累計" + totalUsagi + "匹のうさぎを増やしました";
  if (totalKuma >= 1) {
    infotext =
      infotext + "<br>\n今まで累計" + totalKuma + "匹のくまを見つけました";
  }
  if (totalRisu >= 1) {
    infotext =
      infotext + "<br>\n今まで累計" + totalRisu + "匹のりすを見つけました";
  }
  if (totalAja >= 1) {
    infotext =
      infotext + "<br>\n今まで累計" + totalAja + "匹のあじゃを見つけました";
  }
  $(document).ready(function() {
    $("#info").html(infotext);
    setTimeout(function() {
      $("#info").fadeOut("slow");
      infotext = "";
    }, 5000);
  });
}
if (typeof localStorage.totalTairyou === "undefined") {
  localStorage.totalTairyou = 0;
  var totalTairyou = Number(localStorage.totalTairyou);
}
if (typeof localStorage.usapriTimes === "undefined") {
  localStorage.usapriTimes = 0;
}
if (typeof localStorage.playTime === "undefined") {
  localStorage.playTime = 0;
  var playTime = Number(localStorage.playTime);
} else {
  var playTime = Number(localStorage.playTime);
}

//データ保存
$(window).on("pagehide", function() {
  var totalUsagi = Number(localStorage.getItem("totalUsagi"));
  var totalKuma = Number(localStorage.getItem("totalKuma"));
  var totalRisu = Number(localStorage.getItem("totalRisu"));
  var totalAja = Number(localStorage.getItem("totalAja"));
  var totalTairyou = Number(localStorage.getItem("totalTairyou"));
  totalUsagi = totalUsagi + usagi;
  totalKuma = totalKuma + kuma;
  totalRisu = totalRisu + risu;
  totalAja = totalAja + aja;
  totalTairyou = totalTairyou + tairyou;
  var nowTime = Math.floor(Date.now() / 1000);
  playTime = playTime + nowTime - launchTime;
  localStorage.setItem("totalUsagi", totalUsagi);
  localStorage.setItem("totalKuma", totalKuma);
  localStorage.setItem("totalRisu", totalRisu);
  localStorage.setItem("totalAja", totalAja);
  localStorage.totalTairyou = totalTairyou;
  localStorage.playTime = playTime;
});
