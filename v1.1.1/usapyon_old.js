var usagi = 0;
var ran = 0;
var sW = 0;
var sH = 0;
var kuma = 0;
var risu = 0;
var usaran = [];
var tairyou = 0;
var n = 1;
var n2 = 1;
var jupiter = 0;
var sW2 = window.innerWidth + 60;
var sH2 = window.innerHeight + 100;
var stopfuya;
var creimg;
var ach1 = 0;
usaran.push("image/usa (1).png", "image/usa (2).png", "image/usa (3).png", "image/usa (4).png", "image/usa (5).png", "image/usa (6).png", "image/usa (7).png");

document.getElementById("sound5").loop = true;
document.getElementById("sound5").volume = 0.5;
$('#sound5').get(0).play();

if (typeof Cookies.get("launch_times") === "undefined") {
    var CSltime = 1;
    Cookies.set('launch_times', CSltime, {
        expires: 3650
    });
    Cookies.get('launch_times');
    $("#info").html("初回プレイです");
    setTimeout(function() {
        $("#info").fadeOut("slow");
    }, 5000);
} else {
    var CSltime = Cookies.get('launch_times');
    var CStrabbits = Number(Cookies.get('total_rabbits'));
    var CStbears = Number(Cookies.get('total_bears'));
    var CStrisu = Number(Cookies.get('total_risu'));
    CSltime++
    var infotext = CSltime + "回目のプレイです";
    infotext = infotext + "<br>\n今まで累計" + CStrabbits + "匹のうさぎを増やしました"
    if (CStbears >= 1) {
        infotext = infotext + "<br>\n今まで累計" + CStbears + "匹のくまを見つけました"
    }
    if (CStrisu >= 1) {
        infotext = infotext + "<br>\n今まで累計" + CStrisu + "匹のりすを見つけました"
    }
    $("#info").html(infotext);
    setTimeout(function() {
        $("#info").fadeOut("slow");
        infotext = "";
    }, 5000);
}

$(window).on('pagehide', closesave);

function closesave() {
    if (typeof Cookies.get("total_rabbits") === "undefined") {
        var CStrabbits = 0;
        CStrabbits = CStrabbits + usagi;
    } else {
        var CStrabbits = Number(Cookies.get('total_rabbits'));
        CStrabbits = CStrabbits + usagi;
    }
    if (typeof Cookies.get("total_bears") === "undefined") {
        var CStbears = 0;
        CStbears = CStbears + kuma;
    } else {
        var CStbears = Number(Cookies.get('total_bears'));
        CStbears = CStbears + kuma;
    }
    if (typeof Cookies.get("total_risu") === "undefined") {
        var CStrisu = 0;
        CStrisu = CStrisu + risu;
    } else {
        var CStrisu = Number(Cookies.get('total_risu'));
        CStrisu = CStrisu + risu;
    }
    Cookies.set('launch_times', CSltime, {
        expires: 3650
    });
    Cookies.set('total_rabbits', CStrabbits, {
        expires: 3650
    });
    Cookies.set('total_bears', CStbears, {
        expires: 3650
    });
    Cookies.set('total_risu', CStrisu, {
        expires: 3650
    });
}

$(window).keydown(function() {
    return false;
});

setInterval(function() {
    u = usagi + '匹のうさぎがいます';
    if (kuma >= 1) {
        u = u + '<br>\n' + kuma + '匹のくまがいます';
    }
    if (risu >= 1) {
        u = u + '<br>\n' + risu + '匹のりすがいます';
    }
    u + '"';
    $("#usa").html(u);
    if (usagi >= 10000 && jupiter == 0) {
        $('#sound1').get(0).pause();
        $('#sound3').get(0).currentTime = 0;
        $('#sound3').get(0).play();
        var b = document.createElement("img");
        b.setAttribute("src", "image/staff.png");
        b.setAttribute("id", "staff");
        b.setAttribute("style", "text-align:center;position:fixed; bottom:-600px;opacity:0.8;");
        document.body.appendChild(b);
        $("#staff").animate({
            "top": "50px"
        }, 20000);
        n++;
        jupiter = 1;
    } else if (usagi >= 1000 * n) {
        $('#sound5').get(0).pause();
        $('#sound1').get(0).currentTime = 0;
        $('#sound1').get(0).play();
        creimg.setAttribute("src", "image/tairyou.png");
        creimg.setAttribute("style", "position:fixed; bottom:10px; right:10px;");
        document.body.appendChild(creimg);
        n++;
    }
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
    if (typeof Cookies.get("total_rabbits") !== "undefined") {
        if ((CStrabbits + usagi) >= 100 && typeof Cookies.get("achievement1_1") === "undefined") {
            infotext = "累計うさぎ数100匹突破🐰実績：うさぴょんLv.1解除<br>\n" + infotext
            Cookies.set('achievement1_1', '1', {
                expires: 3650
            });
            achshow();
        }
        if ((CStrabbits + usagi) >= 500 && typeof Cookies.get("achievement1_2") === "undefined") {
            infotext = "累計うさぎ数500匹突破🐰実績：うさぴょんLv.2解除<br>\n" + infotext
            Cookies.set('achievement1_2', '1', {
                expires: 3650
            });
            achshow();
        }
        if ((CStrabbits + usagi) >= 1000 && typeof Cookies.get("achievement1_3") === "undefined") {
            infotext = "累計うさぎ数1000匹突破🐰実績：うさぴょんLv.3解除<br>\n" + infotext
            Cookies.set('achievement1_3', '1', {
                expires: 3650
            });
            achshow();
        }
        if ((CStrabbits + usagi) >= 5000 && typeof Cookies.get("achievement1_4") === "undefined") {
            infotext = "累計うさぎ数5000匹突破🐰実績：うさぴょんLv.4解除<br>\n" + infotext
            Cookies.set('achievement1_4', '1', {
                expires: 3650
            });
            achshow();
        }
        if ((CStrabbits + usagi) >= 10000 && typeof Cookies.get("achievement1_5") === "undefined") {
            infotext = "累計うさぎ数10000匹突破🐰実績：うさぴょんLv.5解除<br>\n" + infotext
            Cookies.set('achievement1_5', '1', {
                expires: 3650
            });
            achshow();
        }
        if ((CStrabbits + usagi) >= 50000 && typeof Cookies.get("achievement1_6") === "undefined") {
            infotext = "累計うさぎ数50000匹突破🐰実績：うさぴょんLv.6解除<br>\n" + infotext
            Cookies.set('achievement1_6', '1', {
                expires: 3650
            });
            achshow();
        }
    }
}, 100);
//a
function achshow() {
    $("#info").html(infotext);
    $("#info").show();
    $('#sound4').get(0).play();
    setTimeout(function() {
        $("#info").fadeOut("slow");
        infotext = "";
    }, 5000);
}

$("button").click(function() {
    usafuya();
});

function usafuya() {
    console.log(u);
    $('#sound2').get(0).currentTime = 0;
    $('#sound2').get(0).play();
    sW = Math.floor(Math.random() * sW2) - 30;
    sH = Math.floor(Math.random() * sH2) - 50;
    ran = Math.floor(Math.random() * 101);
    switch (ran) {
        case 0:
            usasrc = "image/risu.png"
            risu++;
            break;
        case 1:
            usasrc = "image/kuma.png";
            kuma++;
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
    console.log(sH);
    console.log(sW);
}