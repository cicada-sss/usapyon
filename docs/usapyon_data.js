//データ読み込み
var launchTimes = localStorage.getItem("launchTimes");
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
    if (localStorage.usapri != 1) {
        launchTimes++;
        localStorage.setItem("launchTimes", launchTimes);
        var infotext = launchTimes + "回目のプレイです";
    } else {
        var infotext = "あなたはうさプリに入れられました";
    }
    infotext = infotext + "<br>\n今まで累計" + totalUsagi + "匹のうさぎを増やしました"
    if (totalKuma >= 1) {
        infotext = infotext + "<br>\n今まで累計" + totalKuma + "匹のくまを見つけました"
    }
    if (totalRisu >= 1) {
        infotext = infotext + "<br>\n今まで累計" + totalRisu + "匹のりすを見つけました"
    }
    if (totalAja >= 1) {
        infotext = infotext + "<br>\n今まで累計" + totalAja + "匹のあじゃを見つけました"
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
$(window).on('pagehide', function() {
    if (localStorage.getItem("launchTimes") == 1) {
        var totalUsagi = usagi;
        var totalKuma = kuma;
        var totalRisu = risu;
        var totalAja = aja;
    } else {
        var totalUsagi = Number(localStorage.getItem("totalUsagi"));
        var totalKuma = Number(localStorage.getItem("totalKuma"));
        var totalRisu = Number(localStorage.getItem("totalRisu"));
        var totalAja = Number(localStorage.getItem("totalAja"));
        totalUsagi = totalUsagi + usagi;
        totalKuma = totalKuma + kuma;
        totalRisu = totalRisu + risu;
        totalAja = totalAja + aja;
    }
    localStorage.setItem("totalUsagi", totalUsagi);
    localStorage.setItem("totalKuma", totalKuma);
    localStorage.setItem("totalRisu", totalRisu);
    localStorage.setItem("totalAja", totalAja);
    if (typeof localStorage.play_time === "undefined") {
    nowTime = Math.floor(nowTime/1000);
        var playTime = nowTime - launchTime;
        localStorage.setItem("play_time", playTime);
    } else {
    playTime = playTime + nowTime - launchTime;
    console.log(playTime)
    localStorage.setItem("play_time", playTime);
}
})