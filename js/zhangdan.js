/**
 * Created by 三木 on 2018/10/7.
 */
$('.navL').click(function(){
    $('.navR').css({'border-bottom':'none','color': '#333'});
    $('.navL').css({'border-bottom':'0.02rem solid #44afff','color': '#44afff'});
    $('.two').css('z-index','5');
    $('.yi').css('z-index','10')
})
$('.navR').click(function(){
    $('.navL').css({'border-bottom':'none','color': '#333'});
    $('.navR').css({'border-bottom':'0.02rem solid #44afff','color': '#44afff'});
    $('.yi').css('z-index','5');
    $('.two').css('z-index','10')
})