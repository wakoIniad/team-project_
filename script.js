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

let flag = true;
let counter = 0;
let interval;
$(".game-preview .original-scroller").hover(function() {
    

    
    setTimeout(function(){
        interval = setInterval(function(){
            if(flag) {
                $("")
            }
        },100);

        $(".game-preview .original-scroller").scroll(function(){
            flag = false;
            const my_c = counter ++;
            setTimeout(function(){
                if(my_c === counter)flag = true;
            },100);
        });
    },750)

},function(){
    $(".game-preview .original-scroller").stop();
    $(".game-preview .original-scroller").scrollTop(0);
    flag = true;
    counter = 0;
    if(interval)clearInterval(interval);
});
/*$(".gameboy-container").on("click",function(){
    $(".game-preview .original-scroller").stop();
    flag = true;
})*/

