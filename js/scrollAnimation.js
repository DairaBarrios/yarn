$(window).scroll(function() {
    if ($("#scrollAnimation1").isOnScreen() == true) {
        $("#scrollAnimation1").addClass("animate__animated animate__backInLeft");
    }
    if ($("#scrollAnimation2").isOnScreen() == true) {
        $("#scrollAnimation2").addClass("animate__animated animate__backInLeft");
    }
    if ($("#scrollAnimation3").isOnScreen() == true) {
        $("#scrollAnimation3").addClass("animate__animated animate__backInLeft");
    }
});

$.fn.isOnScreen = function() {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};