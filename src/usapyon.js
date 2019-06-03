//初期化
if (localStorage.usapri == 1) {
  window.location.href = "usapri.html";
}

//0.1秒毎に状態チェック
setInterval(function() {
  //うさぎが10000匹を超えた場合ジュピターを流してスタッフロールを表示
  if (usagi >= 10000 * no) {
    stopBGM();
    bgm2.play();
    var b = document.createElement("img");
    b.setAttribute("src", "image/staff.png");
    b.setAttribute("id", "staff");
    b.setAttribute(
      "style",
      "text-align:center; position:fixed; bottom:0px; left:200px;z-index:9999;opacity:0.9; max-width:50%;margin:0 auto;"
    );
    document.body.appendChild(b);
    $("#staff").animate(
      {
        top: "50px"
      },
      400
    );
    no++;
    n++;
    //うさぎが1000匹を超える毎に大漁を表示しカルメン組曲を再生
  } else if (usagi >= 1000 * n) {
    stopBGM();
    bgm1.load();
    bgm1.play();
    var creimg = document.createElement("img");
    creimg.setAttribute("src", "image/tairyou.png");
    creimg.setAttribute("style", "position:fixed; bottom:10px; right:10px;");
    document.body.appendChild(creimg);
    n++;
    tairyou++;
  }
}, 100);
