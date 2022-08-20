// jquery の開始を宣言
$(function () {

    // 画面をスクロールをしたら動かしたい
    $(window).scroll(function () {

        //「offset()」は、画面上（document内）に配置したHTML要素の表示位置を座標で取得できるメソッド
        //要素のtopから50px下の
        var elemPos = $('.images').offset().top + 500;
        // 「scrollTop()」は、ブラウザの画面をスクロールした時の位置（スクロール量）を取得できるメソッド
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $('.img2').addClass('move2');
            $('.img3').addClass('move3');
            // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $('.img2').removeClass('move2');
            $('.img3').removeClass('move3');
            // 画面外に出たらfadeInというクラス名を外す
        }

    });

});