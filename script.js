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
if(!window.location.href.endsWith("#prologue"))window.location.href += "#prologue";

let flag = true;
$(".gameboy-container").hover(function() {
    setTimeout(function(){
        if(!flag)return;
        flag = false
        const from = $(".gameboy-container .explan .anchor.prefix").position().top;
        const to = $(".gameboy-container .explan .anchor.sufix").position().top;
        const dist = to-from;
        $(".game-preview .original-scroller").animate({
            scrollTop: dist
        }, dist*100, "swing");
    },750);
},function(){
    $(".game-preview .original-scroller").stop();
    $(".game-preview .original-scroller").scrollTop(0);
    flag = true;
});