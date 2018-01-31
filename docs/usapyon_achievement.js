//0.1秒毎に状態チェック
function achievement() {
    var nowTime = Math.floor(Date.now() / 1000);
    var achievementList = "";
    var totalAchievement = 0;
    if (typeof localStorage.achievement1_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんLv.1</span> - 累計うさぎ数100匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement1_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんLv.2</span> - 累計うさぎ数500匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement1_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんLv.3</span> - 累計うさぎ数1000匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement1_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんLv.4</span> - 累計うさぎ数5000匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement1_5 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんLv.5</span> - 累計うさぎ数10000匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement2_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">くまぴょんLv.1</span> - くま発見<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement2_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">くまぴょんLv.2</span> - 累計くま発見数5匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement2_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">くまぴょんLv.3</span> - 累計くま発見数10匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement2_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">くまぴょんLv.4</span> - 累計くま発見数50匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement2_5 !== "undefined") {
        achievementList = achievementList + '<span class="notice">くまぴょんLv.5</span> - 累計くま発見数100匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement3_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">トッテナムLv.1</span> - りす発見<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement3_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">トッテナムLv.2</span> - 累計りす発見数5匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement3_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">トッテナムLv.3</span> - 累計りす発見数10匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement3_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">トッテナムLv.4</span> - 累計りす発見数50匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement3_5 !== "undefined") {
        achievementList = achievementList + '<span class="notice">トッテナムLv.5</span> - 累計りす発見数100匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement4_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">あじゃぴょんLv.1</span> - あじゃ発見<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement4_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">あじゃぴょんLv.2</span> - 累計あじゃ発見数3匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement4_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">あじゃぴょんLv.3</span> - 累計あじゃ発見数5匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement4_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">あじゃぴょんLv.4</span> - 累計あじゃ発見数10匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement4_5 !== "undefined") {
        achievementList = achievementList + '<span class="notice">あじゃぴょんLv.5</span> - 累計あじゃ発見数30匹突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement5_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">鳥貴族Lv.1</span> - 鳥になった回数1回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement5_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">鳥貴族Lv.2</span> - 鳥になった回数5回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement5_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">鳥貴族Lv.3</span> - 鳥になった回数10回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement5_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">鳥貴族Lv.4</span> - 鳥になった回数30回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement5_5 !== "undefined") {
        achievementList = achievementList + '<span class="notice">鳥貴族Lv.5</span> - 鳥になった回数50回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement6_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさプリズナーLv.1</span> - うさプリ収監<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement6_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさプリズナーLv.2</span> - うさプリ収監3回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement6_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさプリズナーLv.3</span> - うさプリ収監5回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement6_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさプリズナーLv.4</span> - うさプリ収監10回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement6_5 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさプリズナーLv.5</span> - うさプリ収監30回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement7_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょん中毒Lv.1</span> - 累計プレイ時間10秒突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement7_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょん中毒Lv.2</span> - 累計プレイ時間60秒突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement7_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょん中毒Lv.3</span> - 累計プレイ時間600秒突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement7_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょん中毒Lv.4</span> - 累計プレイ時間3600秒突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement7_5 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょん中毒Lv.5</span> - 累計プレイ時間43200秒突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement8_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">大漁Lv.1</span> - 大漁1回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement8_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">大漁Lv.2</span> - 大漁5回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement8_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">大漁Lv.3</span> - 大漁10回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement8_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">大漁Lv.4</span> - 大漁50回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement8_5 !== "undefined") {
        achievementList = achievementList + '<span class="notice">大漁Lv.5</span> - 大漁100回突破<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement9_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">奇跡のあじゃ</span> - 最初にあじゃを出した<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement9_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">幸運のくま</span> - 最初にくまを出した<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement9_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">運命のトッテナム</span> - 最初にりすを出した<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement9_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんプレイヤーの鑑</span> - うさぎのみで大漁を達成した<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement10_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">Thank you for playing</span> - エンディングを見た<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement11_1 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんマスターLv.1</span> - 実績10個解除<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement11_2 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんマスターLv.2</span> - 実績20個解除<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement11_3 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんマスターLv.3</span> - 実績30個解除<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement11_4 !== "undefined") {
        achievementList = achievementList + '<span class="notice">うさぴょんマスターLv.4</span> - 実績40個解除<br>\n'
        totalAchievement++;
    }
    if (typeof localStorage.achievement11_5 !== "undefined") {
        achievementList = achievementList + '<span class="notice">Congratulations!</span> - 全実績解除<br>\n'
        totalAchievement++;
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
    if ((totalAja + aja) >= 30 && typeof localStorage.achievement4_5 === "undefined") {
        infotext = '<span class="notice">累計あじゃ発見数30匹突破🐰実績：あじゃぴょんLv.5解除</span><br>\n' + infotext
        localStorage.achievement4_5 = 1;
        achshow();
    }
    if ((localStorage.totalTori) >= 1 && typeof localStorage.achievement5_1 === "undefined") {
        infotext = '<span class="notice">鳥になった回数1回突破🐰実績：鳥貴族Lv.1解除</span><br>\n' + infotext
        localStorage.achievement5_1 = 1;
        achshow();
    }
    if ((localStorage.totalTori) >= 5 && typeof localStorage.achievement5_2 === "undefined") {
        infotext = '<span class="notice">鳥になった回数5回突破🐰実績：鳥貴族Lv.2解除</span><br>\n' + infotext
        localStorage.achievement5_2 = 1;
        achshow();
    }
    if ((localStorage.totalTori) >= 10 && typeof localStorage.achievement5_3 === "undefined") {
        infotext = '<span class="notice">鳥になった回数10回突破🐰実績：鳥貴族Lv.3解除</span><br>\n' + infotext
        localStorage.achievement5_3 = 1;
        achshow();
    }
    if ((localStorage.totalTori) >= 30 && typeof localStorage.achievement5_4 === "undefined") {
        infotext = '<span class="notice">鳥になった回数30回突破🐰実績：鳥貴族Lv.4解除</span><br>\n' + infotext
        localStorage.achievement5_4 = 1;
        achshow();
    }
    if ((localStorage.totalTori) >= 50 && typeof localStorage.achievement5_5 === "undefined") {
        infotext = '<span class="notice">鳥になった回数50回突破🐰実績：鳥貴族Lv.5解除</span><br>\n' + infotext
        localStorage.achievement5_5 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 1 && typeof localStorage.achievement6_1 === "undefined") {
        infotext = '<span class="notice">うさプリ収監🐰実績：うさプリズナーLv.1解除</span><br>\n' + infotext
        localStorage.achievement6_1 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 3 && typeof localStorage.achievement6_2 === "undefined") {
        infotext = '<span class="notice">うさプリ収監3回突破🐰実績：うさプリズナーLv.2解除</span><br>\n' + infotext
        localStorage.achievement6_2 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 5 && typeof localStorage.achievement6_3 === "undefined") {
        infotext = '<span class="notice">うさプリ収監5回突破🐰実績：うさプリズナーLv.3解除</span><br>\n' + infotext
        localStorage.achievement6_3 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 10 && typeof localStorage.achievement6_4 === "undefined") {
        infotext = '<span class="notice">うさプリ収監10回突破🐰実績：うさプリズナーLv.4解除</span><br>\n' + infotext
        localStorage.achievement6_4 = 1;
        achshow();
    }
    if ((localStorage.usapriTimes) >= 30 && typeof localStorage.achievement6_5 === "undefined") {
        infotext = '<span class="notice">うさプリ収監30回突破🐰実績：うさプリズナーLv.5解除</span><br>\n' + infotext
        localStorage.achievement6_5 = 1;
        achshow();
    }
    if (playTime + nowTime - launchTime >= 10 && typeof localStorage.achievement7_1 === "undefined") {
        infotext = '<span class="notice">累計プレイ時間10秒突破🐰実績：うさぴょん中毒Lv.1解除</span><br>\n' + infotext
        localStorage.achievement7_1 = 1;
        achshow();
    }
    if (playTime + nowTime - launchTime >= 60 && typeof localStorage.achievement7_2 === "undefined") {
        infotext = '<span class="notice">累計プレイ時間60秒突破🐰実績：うさぴょん中毒Lv.2解除</span><br>\n' + infotext
        localStorage.achievement7_2 = 1;
        achshow();
    }
    if (playTime + nowTime - launchTime >= 600 && typeof localStorage.achievement7_3 === "undefined") {
        infotext = '<span class="notice">累計プレイ時間600秒突破🐰実績：うさぴょん中毒Lv.3解除</span><br>\n' + infotext
        localStorage.achievement7_3 = 1;
        achshow();
    }
    if (playTime + nowTime - launchTime >= 3600 && typeof localStorage.achievement7_4 === "undefined") {
        infotext = '<span class="notice">累計プレイ時間3600秒突破🐰実績：うさぴょん中毒Lv.4解除</span><br>\n' + infotext
        localStorage.achievement7_4 = 1;
        achshow();
    }
    if (playTime + nowTime - launchTime >= 43200 && typeof localStorage.achievement7_5 === "undefined") {
        infotext = '<span class="notice">累計プレイ時間43200秒突破🐰実績：うさぴょん中毒Lv.5解除</span><br>\n' + infotext
        localStorage.achievement7_5 = 1;
        achshow();
    }
    if ((totalTairyou + tairyou) >= 1 && typeof localStorage.achievement8_1 === "undefined") {
        infotext = '<span class="notice">大漁1回突破🐰実績：大漁Lv.1解除</span><br>\n' + infotext
        localStorage.achievement8_1 = 1;
        achshow();
    }
    if ((totalTairyou + tairyou) >= 5 && typeof localStorage.achievement8_2 === "undefined") {
        infotext = '<span class="notice">大漁5回突破🐰実績：大漁Lv.2解除</span><br>\n' + infotext
        localStorage.achievement8_2 = 1;
        achshow();
    }
    if ((totalTairyou + tairyou) >= 10 && typeof localStorage.achievement8_3 === "undefined") {
        infotext = '<span class="notice">大漁10回突破🐰実績：大漁Lv.3解除</span><br>\n' + infotext
        localStorage.achievement8_3 = 1;
        achshow();
    }
    if ((totalTairyou + tairyou) >= 50 && typeof localStorage.achievement8_4 === "undefined") {
        infotext = '<span class="notice">大漁50回突破🐰実績：大漁Lv.4解除</span><br>\n' + infotext
        localStorage.achievement8_4 = 1;
        achshow();
    }
    if ((totalTairyou + tairyou) >= 100 && typeof localStorage.achievement8_5 === "undefined") {
        infotext = '<span class="notice">大漁100回突破🐰実績：大漁Lv.5解除</span><br>\n' + infotext
        localStorage.achievement8_5 = 1;
        achshow();
    }
    if (usagi == 0 && kuma == 0 && risu == 0 && aja == 1 && typeof localStorage.achievement9_1 === "undefined") {
        infotext = '<span class="notice">最初にあじゃを出した🐰実績：奇跡のあじゃ解除</span><br>\n' + infotext
        localStorage.achievement9_1 = 1;
        achshow();
    }
    if (usagi == 0 && risu == 0 && aja == 0 && kuma == 1 && typeof localStorage.achievement9_2 === "undefined") {
        infotext = '<span class="notice">最初にくまを出した🐰実績：幸運のくま解除</span><br>\n' + infotext
        localStorage.achievement9_2 = 1;
        achshow();
    }
    if (usagi == 0 && kuma == 0 && aja == 0 && risu == 1 && typeof localStorage.achievement9_3 === "undefined") {
        infotext = '<span class="notice">最初にりすを出した🐰実績：運命のトッテナム解除</span><br>\n' + infotext
        localStorage.achievement9_3 = 1;
        achshow();
    }
    if (usagi == 1000 && kuma == 0 && aja == 0 && risu == 0 && localStorage.usapri != 1 && typeof localStorage.achievement9_4 === "undefined") {
        infotext = '<span class="notice">うさぎのみで1000匹を達成した🐰実績：うさぴょんプレイヤーの鑑解除</span><br>\n' + infotext
        localStorage.achievement9_3 = 1;
        achshow();
    }
    if (usagi >= 10000 && typeof localStorage.achievement10_1 === "undefined") {
        infotext = '<span class="notice">エンディングを見た🐰実績：Thank you for playing解除</span><br>\n' + infotext
        localStorage.achievement10_1 = 1;
        achshow();
    }
    if (totalAchievement >= 10 && typeof localStorage.achievement11_1 === "undefined") {
        infotext = '<span class="notice">実績10個解除🐰実績：うさぴょんマスターLv.1解除</span><br>\n' + infotext
        localStorage.achievement11_1 = 1;
        achshow();
    }
    if (totalAchievement >= 20 && typeof localStorage.achievement11_2 === "undefined") {
        infotext = '<span class="notice">実績20個解除🐰実績：うさぴょんマスターLv.2解除</span><br>\n' + infotext
        localStorage.achievement11_2 = 1;
        achshow();
    }
    if (totalAchievement >= 30 && typeof localStorage.achievement11_3 === "undefined") {
        infotext = '<span class="notice">実績30個解除🐰実績：うさぴょんマスターLv.3解除</span><br>\n' + infotext
        localStorage.achievement11_3 = 1;
        achshow();
    }
    if (totalAchievement >= 40 && typeof localStorage.achievement11_4 === "undefined") {
        infotext = '<span class="notice">実績40個解除🐰実績：うさぴょんマスターLv.4解除</span><br>\n' + infotext
        localStorage.achievement11_4 = 1;
        achshow();
    }
    if (totalAchievement >= 49 && typeof localStorage.achievement11_5 === "undefined") {
        infotext = '<span class="notice">全実績解除🐰実績：Congratulations!解除</span><br>\n' + infotext
        localStorage.achievement11_5 = 1;
        achshow();
    }
    console.log(totalAchievement);
    localStorage.totalAchievement = totalAchievement;
$("#achievement_list").html(achievementList);
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
setInterval(achievement, 1000);