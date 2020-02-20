var elapsedTime = 0;
var n = 1000;
var activeAddSec = 1000;
var inactiveAddSec = 1;

var arr = [];
for (var num = 0; num < 66; ++num) {
    arr.push("30秒");
}
for (var num = 0; num < 25; ++num) {
    arr.push("90秒");
}
for (var num = 0; num < 8; ++num) {
    arr.push("120秒");
}
for (var num = 0; num < 4; ++num) {
    arr.push("240秒");
}

/*
あの懐中時計 - clock01
停止を押すとストップ　解除でそれまでのやつ*100/起動してからの秒
時計 - clock02　表示中+1
時計2 - clock03　表示してない間*2
UR 目覚まし時計 - clock04　起動回数+1
時計4 - clock05　6時間経つごとに+1　閉じるとリセット
時計5 - clock06　ランダムで貯蓄*2
時計6 - clock07　1日経つごとに+1　開くとリセット
壊れた時計 - clock08　半減で捨てた時点で×2
砂時計 - clock09　加算秒数*2かつ1時間ごとにひっくりかえす
時計回りの人々 - clock10　アクションごとに+1
Doomsday Clock - clock11　表示してない間*5だが1日でゼロ
clock lock works - clock12　桁数+
時計7 - clock13　所持から1日おきに+1or-1
*/

now = new Date();
var launchTime = now.getTime();
launchTime = Math.floor(launchTime / 1000);
console.log(launchTime);
setInterval(function() {
    now = new Date();
    var nowTime = now.getTime();
    nowTime = Math.floor(nowTime / 1000)
}, 1);

var possessionClock = [];
possessionClock.push("時計1", "時計5", "時計4", "clock lock works");
if ($.inArray("時計1", possessionClock) >= 0) {
    var clock01Status = [];
    console.log(clock01Status);
    activeAddSec += 1;
}
if ($.inArray("時計5", possessionClock) >= 0) {
    setInterval(function() {
        var rnClock05 = Math.floor(Math.random() * 1001);
        if (rnClock05 == 0) {
            n = n * 2;
            console.log(rnClock05);
        }
    }, 1000);
}
if ($.inArray("時計4", possessionClock) >= 0) {
    var x = 1;
    setInterval(function() {
        if (elapsedTime - 21600 * x == 0) {
            ++x;
            ++activeAddSec;
        }
    }, 1000);
}
if ($.inArray("clock lock works", possessionClock) >= 0) {
    setInterval(function() {
        nLength = String(n).length;
    }, 1000);
    activeAddSec += String(n).length;
}
if ($.inArray("時計7", possessionClock) >= 0) {
    var clock14Status = [];
    clock14Status[0] = launchTime;
    setInterval(function() {
        if (launchTime - nowTime == 86400 * clock14Status[1]) {
            ++clock14Status[1];
            ++activeAddSec;
        }
    }, 1000);
}
var dispPossessionClock = "";
for (var i = 0; i < possessionClock.length + 1; i++) {
    if (possessionClock[i]) {
        dispPossessionClock += possessionClock[i] + "<br>\n";
    }
}
$("#possession_clock").html(dispPossessionClock);

///
///情報表示
///

setInterval(function() {
    n += activeAddSec;
    elapsedTime += 5400
    $("#active_addsec").html("現在の加算秒数（起動時）/1秒 : " + activeAddSec + "秒");
    $("#inactive_addsec").html("現在の加算秒数（非起動時）/1秒 : " + inactiveAddSec + "秒");
    $("#elapsed_time").html("ゲームを起動してからの経過時間 ： " + elapsedTime + "秒");
}, 1000);

setInterval(function() {
    $("#saving_sec").html(n + "秒");
}, 10);

$("#1").click(function() {
    if (n >= 43200) {
        n -= 43200;
        ++inactiveAddSec;
    } else {
        $("#1").html("error!");
        setTimeout(function() {
            $("#1").html("43200秒を消費して非起動時の加算秒数を+1");
        }, 1000);
    }
});

gacha3.addEventListener("click", function() {
    if (n >= 60) {
        n -= 60;
        ppp = arr[Math.floor(Math.random() * arr.length)];
        if (ppp == "30秒") {
            hyo.innerHTML = "30秒";
            n += 30;
        }
        if (ppp == "90秒") {
            hyo.innerHTML = "90秒";
            n += 90;
        }
        if (ppp == "120秒") {
            hyo.innerHTML = "120秒";
            n += 120;
        }
        if (ppp == "240秒") {
            hyo.innerHTML = "240秒";
            n += 240;
        }
    } else {
        gacha3.innerHTML = "error!";
        setTimeout(function() {
            gacha3.innerHTML = "43200秒を消費して非起動時の加算秒数を+1";
        }, 1000);
    }
}, false);

gacha4.addEventListener("click", function() {
    if (n >= 600) {
        n -= 600;
        var disp = "";
        for (var num = 0; num < 10; ++num) {
            ppp = arr[Math.floor(Math.random() * arr.length)];
            if (ppp == "30秒") {
                disp += "N 30秒<br>";
                n += 30;
            }
            if (ppp == "90秒") {
                disp += "N 90秒<br>";
                n += 90;
            }
            if (ppp == "120秒") {
                disp += "R 120秒<br>";
                n += 120;
            }
            if (ppp == "240秒") {
                disp += "R 240秒<br>";
                n += 240;
            }
        }
        hyo.innerHTML = disp;
    } else {
        gacha4.innerHTML = "error!";
        setTimeout(function() {
            gacha4.innerHTML = "43200秒を消費して非起動時の加算秒数を+1";
        }, 1000);
    }
}, false);