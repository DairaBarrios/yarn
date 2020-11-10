$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 650) {
        $('.fixed-top').css('background', 'transparent');
    } else {
        $('.fixed-top').css('background', '#9D6B53');
    }
});