function init() {
    $(".slide").slick({
        arrows: true,          
        dots: true,            
        autoplay: true,        
        autoplaySpeed: 5000,   
        slidesToShow: 3,       
        slidesToScroll: 1,     
        responsive: [
            {
                breakpoint: 768, // 모바일 (768px 이하)
                settings: {
                    slidesToShow: 1,  
                    slidesToScroll: 1,
                    centerMode: true, 
                    variableWidth: false, 
                }
            }
        ]
    });
}

    /*TOP버튼*/
    $('.top').on('click',function(){
    $('html').animate({scrollTop:0},750);
    });


$(window).on('load',init)


