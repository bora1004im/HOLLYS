function init() {
    // 기존 슬라이드 제거 후 재초기화
    if ($(".slide").hasClass("slick-initialized")) {
        $(".slide").slick("unslick");
    }

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
                    centerMode: false,  // 중앙 정렬 해제
                    variableWidth: false // 슬라이드 크기 고정
                }
            }
        ]
    });
}

// 페이지 로드 후 실행
$(document).ready(function () {
    init();
});

// 윈도우 크기 변경 시 슬라이드 재적용
$(window).on("resize", function () {
    init();
});



const elBtn = document.querySelectorAll('.menu>ul>li .main'); 
const elPopup = document.querySelectorAll('.menu>ul>li .txt');

// 모든 .main 버튼에 클릭 이벤트를 추가
elBtn.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        elPopup[index].classList.add('active');
    });
});

// 모든 .txt 요소에 클릭 이벤트를 추가하여 팝업을 닫을 수 있도록 설정
elPopup.forEach((popup, index) => {
    popup.addEventListener('click', function() {
        elPopup[index].classList.remove('active');
    });
});

$(document).on('ready', function() {
    $(".slide").slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

/*체크박스*/ 
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const menuItems = document.querySelectorAll('.menu ul li');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            let selectedCategories = [];

            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selectedCategories.push(cb.nextElementSibling.nextSibling.nodeValue.trim().toLowerCase());
                }
            });

            menuItems.forEach(item => {
                const itemCategory = item.classList;
                if (selectedCategories.length === 0) {
                    item.style.display = 'block';
                } else {
                    item.style.display = selectedCategories.some(category => itemCategory.contains(category.replace(' ', '-'))) ? 'block' : 'none';
                }
            });
        });
    });
});



/*TOP버튼*/
$('.top').on('click',function(){
$('html').animate({scrollTop:0},750);
});


