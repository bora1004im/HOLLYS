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
        let conTop = $('.visual').eq(idx).offset().top;

        $('.header .a > a').eq(0).on('click', function(){ 
            $('html').animate({scrollTop:660},800);
        });

        $('.header .a > a').eq(1).on('click', function(){ 

        $('html').animate({scrollTop:2290},800);
        });

        $('.header .a > a').eq(2).on('click', function(){ 

        $('html').animate({scrollTop:4210},800);
        });
        
        console.log(
            $('.visual').offset().top, //668
            $('.crown').offset().top, //2287
            $('.order').offset().top, //4208
        )

