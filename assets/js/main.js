(function ($) {
    "use strict";
    // offcanvas-menu
    $(".bar").click(function(){
        $(".offcanvas-wrapper, .overlay").addClass("active");
    });

    $(".cross, .overlay, .off-menu-top .balance-personal").click(function(){
        $(".offcanvas-wrapper, .overlay").removeClass("active");
    });


    $(".off-menu ul li.has-dropdown a").click(function(){
        $("#submenu").toggleClass("active");
    });


    // Banner-sldier
    $('.banner-sldie-active').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        navText:['<img src="assets/img/arrow-left-slifde.png" alt="">','<img src="assets/img/arrow-right-slide.png" alt="">'],
        nav:true,
        dots:true,
    });


    
})(jQuery);