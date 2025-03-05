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