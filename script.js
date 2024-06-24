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
    
    const geap = $(".gameboy-container .explan .anchor.prefix");
    const geas = $(".gameboy-container .explan .anchor.sufix");
    const gei = $(".gameboy-container .explan").innerWidth();
    const from = geap.position().top;
    const to = geas.position().top;
    const dist = to-from;
    const scrollTime = dist * 15 * (gei / 380);

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
        if(counter > 3) {
            go.stop();
            counter = 0;
        }
      }
      timer = setTimeout( autoScroll, 200 );
    });

},function(){
    $(".game-preview .original-scroller").stop();
    $(".game-preview .original-scroller").scrollTop(0);
});

