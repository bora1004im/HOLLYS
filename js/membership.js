$('.slider').slick({
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
    infinite: true, // 무한 반복
    dots: true, // 아래 점 네비게이션
    arrows: true, // 좌우 화살표
    // autoplay: true, // 자동 슬라이드 활성화
    // autoplaySpeed: 3000 // 3초마다 자동 이동 (1000ms = 1초)
});


/*TOP버튼*/
$('.top').on('click',function(){
    $('html').animate({scrollTop:0},750);
});
    
