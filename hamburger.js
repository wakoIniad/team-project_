let flag_hum = false;

$( window ).on( "resize", ()=> {
    hum();
});

function hum() {
    if(flag_hum) return;
    var screenHeight,
        screenWidth,
        widthRaito,
        heightRaito = 0;

    // スマホ画面の横幅と縦幅を取得
    if (window.devicePixelRatio > 0) {
        screenWidth = window.screen.width * window.devicePixelRatio;
        screenHeight = window.screen.height * window.devicePixelRatio;
    } else {
        screenWidth = window.screen.width;
        screenHeight = window.screen.width;
    }

    // 比率計算・縦横比を比率を変数に格納
    function returnRaito(a, b) {
        for (var i = Math.min(a, b); i > 1; i--) {
            if (a % i === 0 && b % i === 0) {
                a = a / i;
                b = b / i;

                widthRaito = a;
                heightRaito = b;
            }
        }
    }

    // 比率計算を実行
    returnRaito(screenWidth, screenHeight);

    console.log(screenWidth,screenHeight,screenWidth/screenHeight)
    // 分岐処理
    if ((screenWidth / screenHeight <= 1) && screenWidth <= 768) {
        flag_hum = true;
        
    $(function() {
        $('.hamburger').click(function() {
            
            if ((screenWidth / screenHeight <= 1)) {
                $(this).toggleClass('active');
        
                if ($(this).hasClass('active')) {
                    $('.globalMenuSp').addClass('active');
                } else {
                    $('.globalMenuSp').removeClass('active');
                } 
            } else {
                flag_hum = false;
                //イベントリムーブ
                $(".hamburger").off();
            }
        });
    });
    //メニュー内を閉じておく
    $(function() {
        $('.globalMenuSp a[href]').click(function() {
            $('.globalMenuSp').removeClass('active');
        $('.hamburger').removeClass('active');

        });
    });
    }
}

hum();