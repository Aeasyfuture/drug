$('.navL').click(function(){
    $('.navR').css({'border-bottom':'none','color': '#333'});
    $('.navL').css({'border-bottom':'0.02rem solid #44afff','color': '#44afff'});
    $('section1').css('z-index','5');
    $('section').css('z-index','10')
})
$('.navR').click(function(){
    $('.navL').css({'border-bottom':'none','color': '#333'});
    $('.navR').css({'border-bottom':'0.02rem solid #44afff','color': '#44afff'});
    $('section').css('z-index','5');
    $('section1').css('z-index','10')
})
$('section .top').click(function(){
    $('.bg').css('display','block')
    $('.bg .cha').click(function(){
        $('.bg').css('display','none')
    })
    $('.bg .hang').click(function(){
        $('.bg').css('display','none')
        $('.bg1').css('display','block')
        $('.bg1 .cha').click(function(){
            $('.bg1').css('display','none')
            $('.bg').css('display','block')
        })
    })
})
$('section1 .top').click(function(){
    location.assign('tuihuo.html')
})
$('.footLi2').click(function(){
    location.assign('zhengshu.html')
})
$('.footLi3').click(function(){
    location.assign('zhangdan.html')
})