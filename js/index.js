function init(){
    $(".slide").slick({
        arrows : false,
        dots: true,
        // vertical: true,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    const domHeight =  $('.visual').height();
    $('html').height(domHeight);

        let offsetTop = [];
        let idx = 0, play;
        let scrollState = {y:0,y2:0,state:'down'}


        setTimeout(function(){ 
            $(window).scrollTop(0); 
            $('.visual').css({ transform:`translateY(-${0}px)` });

            offsetTop = [
                $('.visual > .main-1').offset().top,
                $('.visual > .main-2').offset().top,
                $('.visual > .main-3').offset().top,
                $('.visual > .main-4').offset().top,
                $('.visual > footer').offset().top - ($(window).height()-$('footer').innerHeight())
            ];
        },50);

        
        //scrollbar
        $(window).on('scroll',function(){
            scrollState.y = $(window).scrollTop();

            if(scrollState.y > scrollState.y2){
                scrollState.state = true;  
            }else{
                scrollState.state = false;
            }

            clearTimeout(play);
            play = setTimeout(function(){

                if(scrollState.state){
                    if(idx < 4) idx++;
                }
                else{
                    if(idx > 0) idx--;
                };

                $('.visual').css({
                    transform:`translateY(-${offsetTop[idx]}px)`
                });
                
                $('aside a').removeClass('active')
                .eq(idx).addClass('active');
                
                $('aside p').eq(0).text(`0${idx+1}`);

                console.log(
                    idx+1,
                    $('aside a').length
                )
            },50);            

            scrollState.y2 = scrollState.y;

        })
    //init end
}

// $('.top').on('click',function(){
//     $('html').animate({scrollTop:0},750);
// });



$(window).on('load',init)
