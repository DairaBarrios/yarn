$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 650) {
        $('.fixed-top').addClass("navbar-scroll--color--transparente");
    } else {
        $('.fixed-top').removeClass("navbar-scroll--color--transparente");
    }
});

/*scroll navBar*/