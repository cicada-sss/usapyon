//0.1秒毎に状態チェック
function achievement() {
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
    if ((localStorage.totalTori) >= 5 && typeof localStorage.achievement5_1 === "undefined") {
        infotext = '<span class="notice">鳥になった回数5回突破🐰実績：鳥貴族Lv.1解除</span><br>\n' + infotext
        localStorage.achievement5_1 = 1;
        achshow();
    }
    if ((localStorage.totalTori) >= 10 && typeof localStorage.achievement5_2 === "undefined") {
        infotext = '<span class="notice">鳥になった回数10回突破🐰実績：鳥貴族Lv.2解除</span><br>\n' + infotext
        localStorage.achievement5_2 = 1;
        achshow();
    }
    if ((localStorage.totalTori) >= 50 && typeof localStorage.achievement5_3 === "undefined") {
        infotext = '<span class="notice">鳥になった回数50回突破🐰実績：鳥貴族Lv.3解除</span><br>\n' + infotext
        localStorage.achievement5_3 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 1 && typeof localStorage.achievement6_1 === "undefined") {
        infotext = '<span class="notice">うさプリ釈放🐰実績：うさプリブレイクLv.1解除</span><br>\n' + infotext
        localStorage.achievement6_1 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 3 && typeof localStorage.achievement6_2 === "undefined") {
        infotext = '<span class="notice">うさプリ釈放3回🐰実績：うさプリブレイクLv.2解除</span><br>\n' + infotext
        localStorage.achievement6_2 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 5 && typeof localStorage.achievement6_3 === "undefined") {
        infotext = '<span class="notice">うさプリ釈放5回🐰実績：うさプリブレイクLv.3解除</span><br>\n' + infotext
        localStorage.achievement6_3 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 10 && typeof localStorage.achievement6_4 === "undefined") {
        infotext = '<span class="notice">うさプリ釈放10回🐰実績：うさプリブレイクLv.4解除</span><br>\n' + infotext
        localStorage.achievement6_4 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 30 && typeof localStorage.achievement6_5 === "undefined") {
        infotext = '<span class="notice">うさプリ釈放30回🐰実績：うさプリブレイクLv.5解除</span><br>\n' + infotext
        localStorage.achievement6_5 = 1;
        achshow();
    }
}
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