$('.item').click(function (e){
    $(this).parents().find('.wrapper').addClass('wrapper-active');
    $(this).addClass('active');
});
$('.close').click(function (e){
    e.stopPropagation(); 
    $(this).parents().find('.item').removeClass('active')
                                   .end().find('.wrapper-active').removeClass('wrapper-active');
})