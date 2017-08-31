var usagi = 0;
var kuma = 0;
var risu = 0;
var aja = 0;
var tori = 0;
var tairyou = 0;
var notCarmen = 0;
var n = 1;
var n2 = 1;
var creimg;
var usaran = ["image/usa (1).png", "image/usa (2).png", "image/usa (3).png", "image/usa (4).png", "image/usa (5).png", "image/usa (6).png", "image/usa (7).png"];
for (var i = 0; i < 40; i++) {
    var key = localStorage.key(i); //0番目のキーを取得
    console.log(key + ":" + localStorage[key]);
}

$("#version").click(function(){
  $("#credit").fadeToggle();
});

$(window).keydown(function() {
    return false;
});

$("#1").click(function() {
    usafuya();
});

setInterval(achievement, 10);

