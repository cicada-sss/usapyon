window.onload = function(){  // ローディング画面をフェードアウトさせる
    $(function() {
        $("#loading").fadeOut();
    });
}
$(window).load(function () {  //全ての読み込みが完了したら実行する
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('#contents').css('display', 'block');
});