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
/*if(!window.location.hash)window.location.href += "#prologue";*/

$(".gameboy-container").hover(function() {
    
    if(themeMode === "night") {
        //$(this).children('.gameboy-img').attr('src','gameboy-frame-luna.png');
        $(this).children(".eyecatch-overlay").css('background-image','url("green-screen.jpg")');
    } else if(themeMode === "day") {
        $(this).children(".eyecatch-overlay").css('background-image','url("gb-screen.jpg")');
    }
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
    if(themeMode === "night") {
        ToggleGameBoyScreenDarkMode ();
        //$(this).children('.gameboy-img').attr('src','gameboy-frame-shadow.png');

        /*$(this).children(".eyecatch-overlay").css('display','none');
        setTimeout(()=>$(this).children(".eyecatch-overlay").css('display','block'),0);
        setTimeout(()=>{
            $(".eyecatch-overlay").css('display','none');
            setTimeout(()=>$(".eyecatch-overlay").css('display','block'),0);
        },1000);*/
    } else if(themeMode === "day") {
        
        $(this).children(".eyecatch-overlay").css('opacity',0);
        $(this).children(".eyecatch-overlay").css('display','none'); 
    }
    $(".game-preview .original-scroller").stop();
    $(".game-preview .original-scroller").scrollTop(0);
});

function ToggleGameBoyScreenDarkMode () {
    blueLight.css('background-image','url("black-screen.jpg")');
    blueLight.css('display', 'block');
    blueLight.css('opacity',0.75);
}

let themeMode = "day";

const themeButton = $("#toggle--daynight");
/**モード変更で変更する要素一覧 */
const gameBoy = $(".gameboy-img");
const memberIntoroduction = $(".member-introduction");
const prologue = $("#prologue");
const blueLight = $(".eyecatch-overlay");
const skyScraperImage = $("#main");
const gamePageLink = $(".gamepage-link");

/**settings */
const darkModeGameBoyTheme = 'gameboy-frame-shadow.png';
/**'gameboy-frame-luna.png' */

function onThemeChanging() {
    if($(this).prop('checked')) {
        themeMode = "day";
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
        $("body").css('background-color','rgb(0,0,0)');
        $("body").css("background-image","url(los-angeles-downtown-buildings-night.jpg");
        try {
            $.cookie('theme','sol')
        } catch(e) {
            console.log(e);
        }
    } else {
        themeMode = "night";
        gameBoy.attr('src',darkModeGameBoyTheme);
        memberIntoroduction.css('background-color','#4d5aaf');
        memberIntoroduction.css('color','#89c3eb');
        prologue.addClass("prologue-luna");
        ToggleGameBoyScreenDarkMode ();
        skyScraperImage.css('background-image','url("skyscraper-luna.png")');
        memberIntoroduction.addClass("luna");
        memberIntoroduction.removeClass("sol");
        $("body").css("background-image","url(skyscraper-luna.png");
        
       // $("body").css("background-image","url(los-angeles-downtown-buildings-night.jpg");
            //$("body").css("background-blend-mode","color-dodge")//#
            //$("body").css("background-blend-mode","lighten")
                //$("body").css("background-blend-mode","darken")
        $("body").css("background-blend-mode","multiply")//##
        //$("body").css("background-blend-mode","overlay")
                //$("body").css("background-blend-mode","color-burn")
        $("body").css("background-blend-mode","hard-light")//##
        /*$("body::after").css({
            'background-image':
            'radial-gradient(0degre, rgba(117,255,229,0) 0%, rgba(117,255,229,1) 100%)',
            'width':'100%','height':'20%'
        })*/
        
        //$("#wrapper").css('background',)
        $("body").css('background-color','rgba(117,255,229,1)');
        /**8775FF */
        /** #97C7DC 7A87FF 9C97DC */
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
    } else {
        const isDarkmode = $('html').css('--isDarkmode');
        console.log('darkMode: '+isDarkmode);
        if(isDarkmode === "True" ) {
            $("#toggle--daynight").attr('checked',false);
        }
    }
    onThemeChanging.call(themeButton);
} catch(e) {
    console.log(e);
}

let cancelClick = true;
gamePageLink.on('click',function(e) {
    if(themeMode === 'night') {
        if(cancelClick)e.preventDefault();
        const item = $(this).parents(".gameboy-container").children('.fluorescence');
        item.addClass('effect-activate');
        //.addClass('');
        setTimeout(()=>{
            /*cancelClick = false;
            $(this).click();
            cancelClick = true;*/
            window.location.href = $(this).attr('href');
            item.removeClass('effect-activate');
        },750);
    }
});

