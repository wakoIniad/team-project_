const aspect = 1.50189907759;
function _() {
    $(".game-preview").outerHeight($(".game-preview").width()*aspect);
    console.log($(".game-preview").width())
}

$( window ).on( "resize", ()=> {
    _();
})

_();

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
        setTimeout(function(){
            flag = true;
        },dist*100);
    },750);
},function(){
    $(".game-preview .original-scroller").scrollTop(0);
});