        //메뉴를 클릭하면 해당 콘텐츠가 있는 곳까지 스크롤이 이동

        // setTimeout(function(){
        //     $('html').scrollTop(969);
        //     //window.scrollTop(0,969);
        // },1000)

        // setTimeout(function(){
        //     $('html').animate({scrollTop:969},1000);
        //     //window.scrollTop(0,969);
        // },1000)

        // console.log(
        //     $('.con').eq(0).offset().top,
        //     $('.con').eq(1).offset().top,
        //     $('.con').eq(2).offset().top,
        // )

        //메뉴클릭 

        let idx = $(this).index(); //메뉴의 순번을 변수로 담기
        let conTop = $('main').eq(idx).offset().top;

        $('.header .a > a').eq(0).on('click', function(){ 
            $('html').animate({scrollTop:590},800);
        });

        $('.header .a > a').eq(1).on('click', function(){ 

        $('html').animate({scrollTop:2150},800);
        });

        $('.header .a > a').eq(2).on('click', function(){ 

        $('html').animate({scrollTop:4450},800);
        });

        $('.header .a > a').eq(3).on('click', function(){ 

            $('html').animate({scrollTop:4450},800);
            });

    /*TOP버튼*/
    $('.top').on('click',function(){
    $('html').animate({scrollTop:0},750);
    });