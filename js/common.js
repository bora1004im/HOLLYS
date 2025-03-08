/*header*/
const wrap = document.querySelector('.header-wrap');
const header = document.querySelector('.header');

wrap.addEventListener('mouseenter', () => {
    header.classList.add('active');
});

wrap.addEventListener('mouseleave', () => {
    header.classList.remove('active');
});

document.querySelectorAll('.depth-1 > li').forEach(li => {
    li.addEventListener('mouseenter', () => {
        li.classList.add('hover');
    });

    li.addEventListener('mouseleave', () => {
        li.classList.remove('hover');
    });
});


/*mo-header*/
// 메뉴 열기
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.all-menu').classList.add('on');  // 메뉴 열기
});

// 메뉴 닫기
document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.all-menu').classList.remove('on');   // 메뉴 닫기
});


// 상위 li 클릭 시 해당 .sub-menu에 active 클래스 추가/제거
document.querySelectorAll('.all-menu > ul > li').forEach(function(li) {
    li.addEventListener('click', function() {
        // 모든 .sub-menu에서 active 클래스 제거
        document.querySelectorAll('.all-menu .sub-menu').forEach(function(subMenu) {
            subMenu.classList.remove('active');
        });

        // 클릭한 li 내의 .sub-menu 선택
        const subMenu = li.querySelector('.sub-menu');
        
        // 해당 .sub-menu에 active 클래스 추가
        if (subMenu) {
            subMenu.classList.add('active');
        }
    });
});

// .close-menu 클릭 시 메뉴 닫기 (필요한 경우)
document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.all-menu').classList.remove('on');
});


$(document).ready(function () {
    $("h1 img").on("click", function () {
        window.location.href = "index.html";
    });
});
