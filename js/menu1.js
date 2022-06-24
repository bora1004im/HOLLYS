const elBtn = document.querySelectorAll('.menu>ul>li .main'); 
const elPopup = document.querySelectorAll('.menu>ul>li .txt');

elBtn[0].addEventListener('click', function(){
    elPopup[0].classList.add('active');
    // elPopup.classList.remove('active');
});

elPopup[0].addEventListener('click',function(){
    elPopup[0].classList.remove('active');
});

$(document).on('ready', function() {
    // $(function){ }→ 위 코드를 간단하게 표기 

    $(".slide").slick({
    // dots: true,
    // vertical: true,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1
    });
});


