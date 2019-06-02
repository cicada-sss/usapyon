//初期化
if (localStorage.usapri == 1) {
  window.location.href = "usapri.html";
}
var firstLaunchTime = Date.now();
/*
if (typeof localStorage.first_launch_time === "undefined"){
firstLaunchTime = Math.floor(firstLaunchTime/1000);
localStorage.first_launch_time = firstLaunchTime;
console.log(localStorage.first_launch_time);
} else {
    var firstLaunchTime = localStorage.first_launch_time;
}
*/
if (localStorage.getItem("mute") == 1) {
  document.getElementById("sound1").volume = 0;
  document.getElementById("sound2").volume = 0;
  document.getElementById("sound3").volume = 0;
  document.getElementById("sound4").volume = 0;
  document.getElementById("sound5").volume = 0;
  document.getElementById("sound6").volume = 0;
  document.getElementById("sound7").volume = 0;
  document.getElementById("sound8").volume = 0;
}
$("#tori").click(function() {
  $("#sound7")
    .get(0)
    .play();
  alert("できません");
  if (typeof localStorage.totalTori === "undefined") {
    localStorage.setItem("totalTori", 1);
  } else {
    var totalTori = Number(localStorage.getItem("totalTori"));
    totalTori++;
    localStorage.setItem("totalTori", totalTori);
  }
  tori++;
  if (tori >= 5) {
    var usapriTimes = Number(localStorage.getItem("usapriTimes"));
    usapriTimes++;
    localStorage.setItem("usapriTimes", usapriTimes);
    alert("鳥になりすぎです");
    window.location.href = "usapri.html";
    localStorage.setItem("usapri", 1);
  }
  console.log(totalTori);
});
//0.1秒毎に状態チェック
setInterval(function() {
  u = usagi + "匹のうさぎがいます";
  if (kuma >= 1) {
    u = u + "<br>\n" + kuma + "匹のくまがいます";
  }
  if (risu >= 1) {
    u = u + "<br>\n" + risu + "匹のりすがいます";
  }
  if (aja >= 1) {
    u = u + "<br>\n" + aja + "匹のあじゃがいます";
  }
  u + '"';
  $("#usa").html(u);
  //うさぎが10000匹を超えた場合ジュピターを流してスタッフロールを表示
  if (usagi >= 10000 * no) {
    stopAll();
    $("#sound3")
      .get(0)
      .play();
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
    stopAll();
    $("#sound1").get(0).currentTime = 0;
    $("#sound1")
      .get(0)
      .play();
    var creimg = document.createElement("img");
    creimg.setAttribute("src", "image/tairyou.png");
    creimg.setAttribute("style", "position:fixed; bottom:10px; right:10px;");
    document.body.appendChild(creimg);
    n++;
    tairyou++;
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
    k.setAttribute(
      "style",
      "font-size:500%; position:fixed; top:" +
        btop +
        "px; left:" +
        bleft +
        "px;"
    );
    k.innerHTML = "うさぎを増やす";
    document.body.appendChild(k);
    $(n22c).click(function() {
      usafuya();
    });
    n2++;
  }
}, 100);
