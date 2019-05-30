var usagi = 0;
var ran = 0;
var sW = 0;
var sH = 0;
var kuma = 0;
var risu = 0;
var usaran = [];
var tairyou = 0;
var n = 1;
usaran.push("usa (1).png", "usa (2).png", "usa (3).png", "usa (4).png", "usa (5).png", "usa (6).png", "usa (7).png");

$("#1").click(function() {
    sW2 = window.innerWidth++;
    sH2 = window.innerHeight++;
    sW = Math.floor(Math.random() * sW2);
    sH = Math.floor(Math.random() * sH2);
    ran = Math.floor(Math.random() * 101);
    switch (ran) {
        case 0:
            usasrc = "risu.png"
            risu++;
            console.log(risu);
            break;
        case 1:
            usasrc = "kuma.png";
            kuma++;
            break;
        default:
            usasrc = usaran[Math.floor(Math.random() * usaran.length)];
            usagi++;
            break;
    }
    console.log();
    clas = "#main" + usagi;
    $(clas).offset({
        top: sH,
        left: sW
    });
    var o = document.createElement("img");
    o.setAttribute("id", clas);
    o.setAttribute("src", usasrc);
    o.setAttribute("style", "position:fixed; top:" + sH + "px; left:" + sW + "px;");
    document.body.appendChild(o);
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
    console.log(u);
    $("#usa").html(u);
    if (usagi >= n*1000 & tairyou == 0) {
    var b = document.createElement("img");
    b.setAttribute("src", "tairyou.png");
    b.setAttribute("style", "position:fixed; bottom:10px; right:10px;");
    document.body.appendChild(b);
    n++;
    tairyou = 1;
    console.log(b);
    }
}, 100);

