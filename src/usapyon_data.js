let animals = {
  usagi: 0,
  kuma: 0,
  risu: 0,
  aja: 0,
  tori: 0,
  tairyou: 0
};

// 初期化
if (localStorage.usapri === true) {
  window.location.href = "usapri.html";
}

$(window).keydown(() => false);

// データ読み込み
var launchTimes = localStorage.launchTimes;

var launchTime = Math.floor(Date.now() / 1000);

// //初回プレイの場合
if (!localStorage.launchTimes) {
  localStorage.clear();
  localStorage.launchTimes = 1;
  localStorage.totalUsagi = 0;
  localStorage.totalKuma = 0;
  localStorage.totalRisu = 0;
  localStorage.totalAja = 0;
  localStorage.totalTori = 0;
  localStorage.totalTairyou = 0;
  localStorage.usapriTimes = 0;
  localStorage.playTime = 0;
  localStorage.usapri = false;
}

let total = {
  usagi: Number(localStorage.totalUsagi),
  kuma: Number(localStorage.totalKuma),
  risu: Number(localStorage.totalRisu),
  aja: Number(localStorage.totalAja),
  tori: Number(localStorage.totalTori),
  tairyou: Number(localStorage.totalTairyou)
};

let playTime = Number(localStorage.playTime);

if (!localStorage.launchTimes) {
  var launchTimes = 1;
  var infotext = "初回プレイです";
  $(document).ready(() => {
    $("#info").html(infotext);
    setTimeout(() => {
      $("#info").fadeOut("slow");
      infotext = "";
    }, 5000);
  });
} else {
  // //二回目以降の場合
  if (localStorage.usapri === true) {
    var infotext = "あなたはうさプリに入れられました";
  } else {
    launchTimes++;
    localStorage.launchTimes = launchTimes;
    var infotext = `${launchTimes}回目のプレイです`;
  }
  infotext = `${infotext}<br>\n今まで累計${
    total.usagi
  }匹のうさぎを増やしました`;
  if (total.kuma >= 1) {
    infotext = `${infotext}<br>\n今まで累計${total.kuma}匹のくまを見つけました`;
  }
  if (total.risu >= 1) {
    infotext = `${infotext}<br>\n今まで累計${total.risu}匹のりすを見つけました`;
  }
  if (total.aja >= 1) {
    infotext = `${infotext}<br>\n今まで累計${
      total.aja
    }匹のあじゃを見つけました`;
  }
  $(document).ready(() => {
    $("#info").html(infotext);
    setTimeout(() => {
      $("#info").fadeOut("slow");
      infotext = "";
    }, 5000);
  });
}

// データ保存
$(window).on("pagehide", () => {
  total.usagi = Number(localStorage.totalUsagi);
  total.kuma = Number(localStorage.totalKuma);
  total.risu = Number(localStorage.totalRisu);
  total.aja = Number(localStorage.totalAja);
  total.tairyou = Number(localStorage.totalTairyou);
  total.usagi += animals.usagi;
  total.kuma += animals.kuma;
  total.risu += animals.risu;
  total.aja += animals.aja;
  total.tairyou += animals.tairyou;
  let nowTime = Math.floor(Date.now() / 1000);
  playTime = playTime + nowTime - launchTime;
  localStorage.totalUsagi = total.usagi;
  localStorage.totalKuma = total.kuma;
  localStorage.totalRisu = total.risu;
  localStorage.totalAja = total.aja;
  localStorage.totalTairyou = total.tairyou;
  localStorage.playTime = playTime;
});
