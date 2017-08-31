$("#mute_se").click(function() {
    muteSE();
});

$("#mute_bgm").click(function() {
    muteBGM();
});

$("#not_carmen").click(function() {
    var notCarmen = 1;
});

$("#play_ko").click(function() {
    if (localStorage.usapri == 1) {
    document.getElementById("sound7").play();
        alert("ダメです")
    } else {
    stopAll();
	document.getElementById("sound5").currentTime = 0;
	document.getElementById("sound5").play();
}
});

$("#play_ca").click(function() {
        if (localStorage.usapri == 1) {
    document.getElementById("sound7").play();
        alert("ダメです")
    } else {
    stopAll();
	document.getElementById("sound1").currentTime = 0;
	document.getElementById("sound1").play();
}
});

$("#play_hi").click(function() {
    if (!localStorage.usapriTimes) {
    document.getElementById("sound7").play();
        alert("聴いたことがないのでダメです")
    } else {
    stopAll();
    document.getElementById("sound8").currentTime = 0;
    document.getElementById("sound8").play();
}
});

$("#del").click(function() {
    var del = confirm("全てのデータを初期化します。よろしいですか？");
    if (del) {
        localStorage.clear();
        clearInterval(setInterval(achievement, 10));
        location.reload();
    }
});