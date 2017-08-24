
$("#de").click(function() {
	var del = confirm( "全てのデータを初期化します。よろしいですか？" );
if (del) {
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
localStorage.setItem("mute",1);
});
mute = localStorage.getItem("mute");
console.log(mute)
if (mute == 1) {
document.getElementById("sound1").volume = 0;
document.getElementById("sound2").volume = 0;
document.getElementById("sound3").volume = 0;
document.getElementById("sound4").volume = 0;
document.getElementById("sound5").volume = 0;
}

//初期化
var usagi = 0;
var kuma = 0;
var risu = 0;
var aja = 0;
var tairyou = 0;
var n = 1;
var n2 = 1;
var sW2 = window.innerWidth + 60;
var sH2 = window.innerHeight + 100;
var creimg;
var usaran = ["image/usa (1).png", "image/usa (2).png", "image/usa (3).png", "image/usa (4).png", "image/usa (5).png", "image/usa (6).png", "image/usa (7).png"];

for(var i=0;i<10;i++){
var key=localStorage.key(i);	//0番目のキーを取得
console.log("0番目のキーは"+key+"で　値は"+localStorage[key]+"です");
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

//データ読み込み
var launchTimes = localStorage.getItem("launchTimes");
console.log(launchTimes);
////初回プレイの場合
if (!localStorage.getItem("launchTimes")) {
    localStorage.setItem("launchTimes",1);
    localStorage.setItem("totalUsagi",0);
    localStorage.setItem("totalKuma",0);
    localStorage.setItem("totalRisu",0);
    localStorage.setItem("totalAja",0);
    var totalUsagi = Number(localStorage.getItem("totalUsagi"));
    var totalKuma = Number(localStorage.getItem("totalKuma"));
    var totalRisu = Number(localStorage.getItem("totalRisu"));
    var totalAja = Number(localStorage.getItem("totalAja"));
    var infotext = "初回プレイです";
    $("#info").html("初回プレイです");
    setTimeout(function() {
        $("#info").fadeOut("slow");
        infotext = "";
    }, 5000);
} else {
////二回目以降の場合
    var totalUsagi = Number(localStorage.getItem("totalUsagi"));
    var totalKuma = Number(localStorage.getItem("totalKuma"));
    var totalRisu = Number(localStorage.getItem("totalRisu"));
    var totalAja = Number(localStorage.getItem("totalAja"));
    launchTimes++;
    localStorage.setItem("launchTimes",launchTimes);
    var infotext = launchTimes + "回目のプレイです";
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
    $("#info").html(infotext);
    setTimeout(function() {
        $("#info").fadeOut("slow");
        infotext = "";
    }, 5000);
}

//データ保存
$(window).on('pagehide', function() {
	console.log(launchTimes);
	console.log(totalUsagi);
	console.log(totalRisu);
	console.log(totalKuma);
	console.log(localStorage.getItem("launchTimes"));
	console.log(localStorage.getItem("totalUsagi"));
	console.log(localStorage.getItem("totalKuma"));
	console.log(localStorage.getItem("totalRisu"));
if (localStorage.getItem("launchTimes") == 1) {
        var totalUsagi = usagi;
        var totalKuma = kuma;
        var totalRisu = risu;
        var totalAja = aja;
    }
    else {
    var totalUsagi = Number(localStorage.getItem("totalUsagi"));
    var totalKuma = Number(localStorage.getItem("totalKuma"));
    var totalRisu = Number(localStorage.getItem("totalRisu"));
    var totalAja = Number(localStorage.getItem("totalAja"));
        totalUsagi = totalUsagi + usagi;
        totalKuma = totalKuma + kuma;
        totalRisu = totalRisu + risu;
        totalAja = totalAja + aja;
    }
    localStorage.setItem("totalUsagi",totalUsagi);
    localStorage.setItem("totalKuma",totalKuma);
    localStorage.setItem("totalRisu",totalRisu);
    localStorage.setItem("totalAja",totalAja);
})

//ボタンクリック
$("#1").click(function() {
    usafuya();
});

function usafuya() {

    $('#sound2').get(0).currentTime = 0;
    $('#sound2').get(0).play();
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
    var ran = Math.floor(Math.random() * 11);
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

//実績解除
        if ((totalUsagi + usagi) >= 100 && typeof localStorage.achievement1_1 === "undefined") {
            infotext = '<span class="notice">累計うさぎ数100匹突破🐰実績：うさぴょんLv.1解除</span><br>\n' + infotext
            localStorage.achievement1_1 = 1;
            achshow();
        }
        if ((totalUsagi + usagi) >= 500 && typeof localStorage.achievement1_2 === "undefined") {
            infotext = '<span class="notice">累計うさぎ数500匹突破🐰実績：うさぴょんLv.2解除</span><br>\n' + infotext
            localStorage.achievement1_2 = 1;
            achshow();
        }
        if ((totalUsagi + usagi) >= 1000 && typeof localStorage.achievement1_3 === "undefined") {
            infotext = '<span class="notice">累計うさぎ数1000匹突破🐰実績：うさぴょんLv.3解除</span><br>\n' + infotext
            localStorage.achievement1_3 = 1;
            achshow();
        }
        if ((totalUsagi + usagi) >= 5000 && typeof localStorage.achievement1_4 === "undefined") {
            infotext = '<span class="notice">累計うさぎ数5000匹突破🐰実績：うさぴょんLv.4解除</span><br>\n' + infotext
            localStorage.achievement1_4 = 1;
            achshow();
        }
        if ((totalUsagi + usagi) >= 10000 && typeof localStorage.achievement1_5 === "undefined") {
            infotext = '<span class="notice">累計うさぎ数10000匹突破🐰実績：うさぴょんLv.5解除</span><br>\n' + infotext
            localStorage.achievement1_5 = 1;
            achshow();
        }
        if ((totalUsagi + usagi) >= 50000 && typeof localStorage.achievement1_6 === "undefined") {
            infotext = '<span class="notice">累計うさぎ数50000匹突破🐰実績：うさぴょんLv.6解除</span><br>\n' + infotext
            localStorage.achievement1_6 = 1;
            achshow();
        }

        if ((totalKuma + kuma) >= 1 && typeof localStorage.achievement2_1 === "undefined") {
            infotext = '<span class="notice">くま発見🐰実績：くまぴょんLv.1解除</span><br>\n' + infotext
            localStorage.achievement2_1 = 1;
            achshow();
        }
        if ((totalKuma + kuma) >= 5 && typeof localStorage.achievement2_2 === "undefined") {
            infotext = '<span class="notice">累計くま発見数5匹突破🐰実績：くまぴょんLv.2解除</span><br>\n' + infotext
            localStorage.achievement2_2 = 1;
            achshow();
        }
        if ((totalKuma + kuma) >= 10 && typeof localStorage.achievement2_3 === "undefined") {
            infotext = '<span class="notice">累計くま発見数10匹突破🐰実績：くまぴょんLv.3解除</span><br>\n' + infotext
            localStorage.achievement2_3 = 1;
            achshow();
        }
        if ((totalKuma + kuma) >= 50 && typeof localStorage.achievement2_4 === "undefined") {
            infotext = '<span class="notice">累計くま発見数50匹突破🐰実績：くまぴょんLv.4解除</span><br>\n' + infotext
            localStorage.achievement2_4 = 1;
            achshow();
        }
        if ((totalKuma + kuma) >= 100 && typeof localStorage.achievement2_5 === "undefined") {
            infotext = '<span class="notice">累計くま発見数100匹突破🐰実績：くまぴょんLv.5解除</span><br>\n' + infotext
            localStorage.achievement2_5 = 1;
            achshow();
        }

        if ((totalRisu + risu) >= 1 && typeof localStorage.achievement3_1 === "undefined") {
            infotext = '<span class="notice">りす発見🐰実績：トッテナムLv.1解除</span><br>\n' + infotext
            localStorage.achievement3_1 = 1;
            achshow();
        }
        if ((totalRisu + risu) >= 5 && typeof localStorage.achievement3_2 === "undefined") {
            infotext = '<span class="notice">累計りす発見数5匹突破🐰実績：トッテナムLv.2解除</span><br>\n' + infotext
            localStorage.achievement3_2 = 1;
            achshow();
        }
        if ((totalRisu + risu) >= 10 && typeof localStorage.achievement3_3 === "undefined") {
            infotext = '<span class="notice">累計りす発見数10匹突破🐰実績：トッテナムLv.3解除</span><br>\n' + infotext
            localStorage.achievement3_3 = 1;
            achshow();
        }
        if ((totalRisu + risu) >= 50 && typeof localStorage.achievement3_4 === "undefined") {
            infotext = '<span class="notice">累計りす発見数50匹突破🐰実績：トッテナムLv.4解除</span><br>\n' + infotext
            localStorage.achievement3_4 = 1;
            achshow();
        }
        if ((totalRisu + risu) >= 100 && typeof localStorage.achievement3_5 === "undefined") {
            infotext = '<span class="notice">累計りす発見数100匹突破🐰実績：トッテナムLv.5解除</span><br>\n' + infotext
            localStorage.achievement3_5 = 1;
            achshow();
        }

        if ((totalAja + aja) >= 1 && typeof localStorage.achievement4_1 === "undefined") {
            infotext = '<span class="notice">あじゃ発見🐰実績：あじゃぴょんLv.1解除</span><br>\n' + infotext
            localStorage.achievement4_1 = 1;
            achshow();
        }
        if ((totalAja + aja) >= 3 && typeof localStorage.achievement4_2 === "undefined") {
            infotext = '<span class="notice">累計あじゃ発見数3匹突破🐰実績：あじゃぴょんLv.2解除</span><br>\n' + infotext
            localStorage.achievement4_2 = 1;
            achshow();
        }
        if ((totalAja + aja) >= 5 && typeof localStorage.achievement4_3 === "undefined") {
            infotext = '<span class="notice">累計あじゃ発見数5匹突破🐰実績：あじゃぴょんLv.3解除</span><br>\n' + infotext
            localStorage.achievement4_3 = 1;
            achshow();
        }
         if ((totalAja + aja) >= 10 && typeof localStorage.achievement4_4 === "undefined") {
            infotext = '<span class="notice">累計あじゃ発見数10匹突破🐰実績：あじゃぴょんLv.4解除</span><br>\n' + infotext
            localStorage.achievement4_4 = 1;
            achshow();
        }

}, 100);

//実績表示
function achshow() {
    $("#info").html(infotext);
    $("#info").show();
    $('#sound4').get(0).play();
    setTimeout(function() {
        $("#info").fadeOut("slow");
        infotext = "";
    }, 5000);
}