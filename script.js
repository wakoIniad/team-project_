$(window).on("load",function(){
    $()
})

const aspect = 1.50189907759;
function _() {
    $(".game-preview").outerHeight($(".game-preview").width()*aspect);
    console.log($(".game-preview").width())
}

$( window ).on( "resize", ()=> {
    _();
})

_();

//$(window).scrollTop(0);
//$(window).scrollTop($("#prologue").scrollTop());
if(!window.location.hash)window.location.href += "#prologue";

$(".gameboy-container").hover(function() {
    $(this).children(".eyecatch-overlay").css('background-image','url("gb-screen.jpg")');
    $(this).children(".eyecatch-overlay").css('opacity',0.5);
    $(this).children(".eyecatch-overlay").css('display','block');

    const geap = $(".gameboy-container .explain .anchor.prefix");
    const geas = $(".gameboy-container .explain .anchor.sufix");
    const gei = $(".gameboy-container .explain").innerWidth();
    const from = geap.position().top;
    const to = geas.position().top;
    const dist = to-from;
    const scrollTime = dist * 10 * (gei / 380);

    function autoScroll() {
        
        $(".game-preview .original-scroller").animate({
            scrollTop: dist
        }, scrollTime, "linear");
    }
    setTimeout(autoScroll,750);
    /**
     * 25 : 380
     * 25 * 200 / 380
     */
    
    var timer = false;
    const go = $(".game-preview .original-scroller");
    let counter = 0;
    go.scroll( function(){
      if( timer !== false ){
        clearTimeout( timer );
        counter ++;
        if(counter > 2) {
            go.stop();
            counter = 0;
        }
      }
      timer = setTimeout( autoScroll, 400 );
    });

},function(){
    if(!($("#toggle--daynight")).prop('checked')) {
        ToggleGameBoyScreenDarkMode ()
    }
    $(".game-preview .original-scroller").stop();
    $(".game-preview .original-scroller").scrollTop(0);
});

function ToggleGameBoyScreenDarkMode () {
    blueLight.css('background-image','url("black-screen.jpg")');
    blueLight.css('display', 'block');
    blueLight.css('opacity',0.75);
}

//let themeMode = "day";

const themeButton = $("#toggle--daynight");
/**モード変更で変更する要素一覧 */
const gameBoy = $(".gameboy-img");
const memberIntoroduction = $(".member-introduction");
const prologue = $("#prologue");
const blueLight = $(".eyecatch-overlay");
const skyScraperImage = $("#main");


/**settings */
const darkModeGameBoyTheme = 'gameboy-frame-shadow.png';
/**'gameboy-frame-luna.png' */

function onThemeChanging() {
    if($(this).prop('checked')) {
        //themeMode = "day";
        gameBoy.attr('src','gameboy-frame.png');
        memberIntoroduction.css('background-color','rgb(255, 172, 38)');
        memberIntoroduction.css('color','rgb(255,200,0)');
        prologue.removeClass("prologue-luna");
        
        blueLight.attr('src','gb-screen.jpg');
        blueLight.css('display', 'none');
        blueLight.css('opacity',0);

        skyScraperImage.css('background-image','url("los-angeles-downtown-buildings-night.jpg")');
        $(".member-introduction:target").css('animation', 'highlight 2.4s ease-in-out');
        memberIntoroduction.removeClass("luna");
        memberIntoroduction.addClass("sol");
        try {
            $.cookie('theme','sol')
        } catch(e) {
            console.log(e);
        }
    } else {
        //themeMode = "night";
        gameBoy.attr('src',darkModeGameBoyTheme);
        memberIntoroduction.css('background-color','#4d5aaf');
        memberIntoroduction.css('color','#89c3eb');
        prologue.addClass("prologue-luna");
        ToggleGameBoyScreenDarkMode ();
        skyScraperImage.css('background-image','url("skyscraper-luna.png")');
        memberIntoroduction.addClass("luna");
        memberIntoroduction.removeClass("sol");
        
        try {
            $.cookie('theme','luna')
        } catch(e) {
            console.log(e);
        }
    }
}
themeButton.change(function(){
    onThemeChanging.call(this);
})


try {
    let theme = $.cookie('theme');
    if(theme) {
        if(theme === 'luna') {
            $("#toggle--daynight").attr('checked',false);
        } else if(theme === 'sol') {
            $("#toggle--daynight").attr('checked',true);
        }
    }
    onThemeChanging.call(themeButton);
} catch(e) {
    console.log(e);
}