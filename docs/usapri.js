if (localStorage.usapri != 1) {
    alert("入ってはいけません");
    window.location.href = "index.html";
}
//初期化
document.getElementById("sound2").defaultPlaybackRate = 0.3;
if (!localStorage.getItem("usapriTimes")) {
    var usapriTimes = 0;
} else {
    var usapriTimes = Number(localStorage.getItem("usapriTimes"));
    console.log(usapriTimes);
}
$(function() {
    var buttonSize = 405 - (usapriTimes + 1) * 5
    $("#1").css({
        "font-size": buttonSize + "%"
    });
    console.log(buttonSize);
});
$("#mute").click(function() {
    $('#sound7').get(0).play();
    alert("消えません");
});

function usafuya() {
    $('#sound2').get(0).currentTime = 0;
    $('#sound2').get(0).play();
    var sW2 = window.innerWidth + 60;
    var sH2 = window.innerHeight + 100;
    var sW = Math.floor(Math.random() * sW2) - 30;
    var sH = Math.floor(Math.random() * sH2) - 50;
    var ran = Math.floor(Math.random() * 2001);
    switch (ran) {
        case 0:
            $('#sound6').get(0).currentTime = 0;
            $('#sound6').get(0).play();
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
    if (usagi >= 1000) {
        usapriBreak();
    }
}, 100);

function usapriBreak() {
    localStorage.setItem("usapri", "0");

    alert("釈放します。\nもう戻ってきちゃダメですよ");
    window.location.href = "index.html";
}