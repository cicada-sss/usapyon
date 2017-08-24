//初期化
var usagi = 0;
var kuma = 0;
var risu = 0;
var aja = 0;
var tairyou = 0;
var n = 1;
var n2 = 1;
var creimg;
var stopach = setInterval(achievement, 10);
var usaran = ["image/usa (1).png", "image/usa (2).png", "image/usa (3).png", "image/usa (4).png", "image/usa (5).png", "image/usa (6).png", "image/usa (7).png"];
for (var i = 0; i < 20; i++) {
    var key = localStorage.key(i); //0番目のキーを取得
    console.log(key + ":" + localStorage[key]);
}
//BGM流す
document.getElementById("sound5").loop = true;
if (mute != 1) {
    document.getElementById("sound5").volume = 0.5;
}
$('#sound5').get(0).play();
//キー操作無効
$(window).keydown(function() {
    return false;
});
$("#de").click(function() {
    var del = confirm("全てのデータを初期化します。よろしいですか？");
    if (del) {
        clearInterval(stopach);
        localStorage.clear();
        location.reload();
    }
});
$("#mute").click(function() {
    document.getElementById("sound1").volume = 0;
    document.getElementById("sound2").volume = 0;
    document.getElementById("sound3").volume = 0;
    document.getElementById("sound4").volume = 0;
    document.getElementById("sound5").volume = 0;
    document.getElementById("sound6").volume = 0;
    localStorage.setItem("mute", 1);
});
if (localStorage.getItem("mute") == 1) {
    document.getElementById("sound1").volume = 0;
    document.getElementById("sound2").volume = 0;
    document.getElementById("sound3").volume = 0;
    document.getElementById("sound4").volume = 0;
    document.getElementById("sound5").volume = 0;
    document.getElementById("sound6").volume = 0;
}
$("#tori").click(function() {
    $('#sound7').get(0).play();
    alert("できません");
    if (typeof localStorage.totalTori === "undefined") {
    localStorage.setItem("totalTori", 1);
} else {
    var totalTori = Number(localStorage.getItem("totalTori"));
    totalTori++;
    localStorage.setItem("totalTori", totalTori);
}
console.log(totalTori);
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
    var ran = Math.floor(Math.random() * 101);
    switch (ran) {
        case 0:
            usasrc = "image/risu.png"
            risu++;
            break;
        case 1:
            usasrc = "image/kuma.png";
            kuma++;
            break;
        case 2:
            var ran = Math.floor(Math.random() * 21);
            switch (ran) {
                case 0:
                    $('#sound6').get(0).currentTime = 0;
                    $('#sound6').get(0).play();
                    usasrc = "image/aja.png";
                    aja++;
                    break;
                default:
                    usasrc = usaran[Math.floor(Math.random() * usaran.length)];
                    usagi++;
                    break;
            }
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
    //うさぎが10000匹を超えた場合ジュピターを流してスタッフロールを表示
    if (usagi >= 10000) {
        $('#sound1').get(0).pause();
        $('#sound3').get(0).play();
        var b = document.createElement("img");
        b.setAttribute("src", "image/staff.png");
        b.setAttribute("id", "staff");
        b.setAttribute("style", "text-align:center; position:fixed; bottom:-600px; opacity:0.8;");
        document.body.appendChild(b);
        $("#staff").animate({
            "top": "50px"
        }, 20000);
        n++;
        //うさぎが1000匹を超える毎に大漁を表示しカルメン組曲を再生
    } else if (usagi >= 1000 * n) {
        $('#sound5').get(0).pause();
        $('#sound1').get(0).currentTime = 0;
        $('#sound1').get(0).play();
        var creimg = document.createElement("img");
        creimg.setAttribute("src", "image/tairyou.png");
        creimg.setAttribute("style", "position:fixed; bottom:10px; right:10px;");
        document.body.appendChild(creimg);
        n++;
    }
    //うさぎが500匹を超える毎にボタン再描画
    if (usagi >= 500 * n2) {
        var bleft = $("#1").offset().left;
        var btop = $("#1").offset().top;
        console.log(bleft);
        var k = document.createElement("button");
        var n22 = n2 + 1;
        var n2c = "#" + n2;
        var n22c = "#" + n22;
        k.setAttribute("id", n22);
        k.setAttribute("style", "font-size:500%; position:fixed; top:" + btop + "px; left:" + bleft + "px;");
        k.innerHTML = "うさぎを増やす";
        document.body.appendChild(k);
        $(n22c).click(function() {
            usafuya();
        });
        n2++;
    }
}, 100);