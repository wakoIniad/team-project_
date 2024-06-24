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

$(".game-preview").hover(function() {
    function autoScroll() {
        const from = $(".gameboy-container .explan .anchor.prefix").position().top;
        const to = $(".gameboy-container .explan .anchor.sufix").position().top;
        const dist = to-from;
        $(".game-preview .original-scroller").animate({
            scrollTop: dist
        }, dist*100, "linear");
    }
    setTimeout(autoScroll,750);

    var timer = false;
    $(".game-preview .original-scroller").scroll( function(){
      if( timer !== false ){
        clearTimeout( timer );
        $(".game-preview .original-scroller").stop();
      }
      timer = setTimeout( autoScroll, 200 );
    });

},function(){
    $(".game-preview .original-scroller").stop();
    $(".game-preview .original-scroller").scrollTop(0);
});

