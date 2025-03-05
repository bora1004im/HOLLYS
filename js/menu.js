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


