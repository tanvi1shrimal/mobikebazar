//Onscroll add class on header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var headerHt = $('header').height();

    if(scroll >= headerHt) {
        $(".navbar--noborder").addClass("navbar--shadow");
    } else {
        $(".navbar--noborder").removeClass("navbar--shadow");
    }
});