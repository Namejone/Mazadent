(function ($) {
    "use strict";
    // offcanvas-menu
    $(".bar").click(function(){
        $(".offcanvas-wrapper, .overlay").addClass("active");
    });

    $(".cross, .overlay").click(function(){
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
        navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
        nav:true,
        dots:true,
    });


    
})(jQuery);