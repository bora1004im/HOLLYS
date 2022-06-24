
function init(){
    $(".slide").slick({
        // arrows : false,
        dots: true,
        // vertical: true,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}

$(window).on('load',init)


