let scrollAmount = 0; // Initial scroll amount

window.addEventListener('scroll', function() {
    var y2023 = document.querySelector('.y_2023');
    var line02 = document.querySelector('.line02');
    var rect = y2023.getBoundingClientRect();
    
    if (rect.top <= 0) {
        scrollAmount += 35; // Increase by 35px per scroll
        line02.style.height = scrollAmount + 'px';
    }
});  



/*TOP버튼*/
    $('.top').on('click',function(){
        $('html').animate({scrollTop:0},750);
    });