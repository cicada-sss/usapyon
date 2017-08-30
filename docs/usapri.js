//初期化
var usagi = 0;
var kuma = 0;
var risu = 0;
var aja = 0;
var tori = 0;
var tairyou = 0;
var n = 1;
var n2 = 1;
var creimg;
var usaran = ["image/usa (1).png", "image/usa (2).png", "image/usa (3).png", "image/usa (4).png", "image/usa (5).png", "image/usa (6).png", "image/usa (7).png"];
for (var i = 0; i < 40; i++) {
    var key = localStorage.key(i); //0番目のキーを取得
    console.log(key + ":" + localStorage[key]);
}
//BGM流す
document.getElementById("sound5").loop = true;
    document.getElementById("sound5").volume = 0.5;
$('#sound5').get(0).play();
$("#version").click(function(){
  $("#credit").fadeToggle();
});
    document.getElementById("sound2").defaultPlaybackRate = 0.3;
        if (!localStorage.getItem("usapriTimes")) {
            var usapriTimes = 0;
        } else {
            var usapriTimes = Number(localStorage.getItem("usapriTimes"));
            console.log(usapriTimes);
        }
$(function() {
var buttonSize = 405 - (usapriTimes+1)*5
    $("#1").css({
        "font-size": buttonSize + "%"
    });
    console.log(buttonSize);
});
//キー操作無効
$(window).keydown(function() {
    return false;
});
$("#de").click(function() {
    $('#sound7').get(0).play();
    alert("消せません");
});
$("#mute").click(function() {
    $('#sound7').get(0).play();
    alert("消えません");
});
//ボタンクリック
$("#1").click(function() {
    usafuya();
});

function usafuya() {
    $('#sound2').get(0).currentTime = 0;
    $('#sound2').get(0).play();
    var sW2 = window.innerWidth + 60;
    var sH2 = window.innerHeight + 100;
    var sW = Math.floor(Math.random() * sW2) - 30;
    var sH = Math.floor(Math.random() * sH2) - 50;
            usasrc = usaran[Math.floor(Math.random() * usaran.length)];
            usagi++;
    creimg = document.createElement("img");
    creimg.setAttribute("src", usasrc);
    creimg.setAttribute("style", "position:fixed; top:" + sH + "px; left:" + sW + "px;");
    document.body.appendChild(creimg);
}
//0.1秒毎に状態チェック
setInterval(function() {
    u = usagi + '匹のうさぎがいます';
    if (kuma >= 1) {
        u = u + '<br>\n' + kuma + '匹のくまがいます';
    }
    if (risu >= 1) {
        u = u + '<br>\n' + risu + '匹のりすがいます';
    }
    if (aja >= 1) {
        u = u + '<br>\n' + aja + '匹のあじゃがいます';
    }
    u + '"';
    $("#usa").html(u);
 achievement();
    if (usagi >= 1000) {
        localStorage.setItem("usapri", "0");
        if (typeof localStorage.getItem("usapriTimes") === undefined) {
            localStorage.setItem("usapriTimes", 1);
        } else {
            var usapriTimes = Number(localStorage.getItem("usapriTimes"));
        usapriTimes++;
        }
        localStorage.setItem("usapriTimes", usapriTimes);
        alert("釈放します。\nもう戻ってきちゃダメですよ");
        window.location.href = "index.html";
    }
}, 100);