
function init(){
    $(".slide").slick({
        // arrows : false,
        dots: true,
        // vertical: true,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /*TOP버튼*/
    $('.top').on('click',function(){
    $('html').animate({scrollTop:0},750);
    });
}

$(window).on('load',init)


