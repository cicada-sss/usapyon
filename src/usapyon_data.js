let animals = {
  usagi: 0,
  kuma: 0,
  risu: 0,
  aja: 0,
  tori: 0,
  tairyou: 0
};

//初期化
if (localStorage.usapri == 1) {
  window.location.href = "usapri.html";
}

$(window).keydown(function() {
  return false;
});

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
  localStorage.totalTairyou = 0;
  localStorage.usapriTimes = 0;
  localStorage.playTime = 0;
}

let total = {
  usagi: Number(localStorage.getItem("totalUsagi")),
  kuma: Number(localStorage.getItem("totalKuma")),
  risu: Number(localStorage.getItem("totalRisu")),
  aja: Number(localStorage.getItem("totalAja")),
  tori: Number(localStorage.getItem("totalTori")),
  tairyou: Number(localStorage.getItem("totalTairyou"))
};

var playTime = Number(localStorage.playTime);

if (!localStorage.getItem("launchTimes")) {
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
  if (localStorage.usapri != 1) {
    launchTimes++;
    localStorage.setItem("launchTimes", launchTimes);
    var infotext = launchTimes + "回目のプレイです";
  } else {
    var infotext = "あなたはうさプリに入れられました";
  }
  infotext =
    infotext + "<br>\n今まで累計" + total.usagi + "匹のうさぎを増やしました";
  if (total.kuma >= 1) {
    infotext =
      infotext + "<br>\n今まで累計" + total.kuma + "匹のくまを見つけました";
  }
  if (total.risu >= 1) {
    infotext =
      infotext + "<br>\n今まで累計" + total.risu + "匹のりすを見つけました";
  }
  if (total.aja >= 1) {
    infotext =
      infotext + "<br>\n今まで累計" + total.aja + "匹のあじゃを見つけました";
  }
  $(document).ready(function() {
    $("#info").html(infotext);
    setTimeout(function() {
      $("#info").fadeOut("slow");
      infotext = "";
    }, 5000);
  });
}

//データ保存
$(window).on("pagehide", function() {
  total.usagi = Number(localStorage.getItem("totalUsagi"));
  total.kuma = Number(localStorage.getItem("totalKuma"));
  total.risu = Number(localStorage.getItem("totalRisu"));
  total.aja = Number(localStorage.getItem("totalAja"));
  total.tairyou = Number(localStorage.getItem("totalTairyou"));
  total.usagi = total.usagi + animals.usagi;
  total.kuma = total.kuma + animals.kuma;
  total.risu = total.risu + animals.risu;
  total.aja = total.aja + animals.aja;
  total.tairyou = total.tairyou + animals.tairyou;
  var nowTime = Math.floor(Date.now() / 1000);
  playTime = playTime + nowTime - launchTime;
  localStorage.setItem("totalUsagi", total.usagi);
  localStorage.setItem("totalKuma", total.kuma);
  localStorage.setItem("totalRisu", total.risu);
  localStorage.setItem("totalAja", total.aja);
  localStorage.totalTairyou = total.tairyou;
  localStorage.playTime = playTime;
});
