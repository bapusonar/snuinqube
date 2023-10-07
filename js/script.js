'use strict';
/* ==========================================================================
   1. On Document Ready
   ========================================================================== */
jQuery(document).ready(function($) {

    jQuery(window).load(function() {
        /* - 1.0. Fade In Content
        ========================================================================== */
        jQuery("#mainWrapper").addClass("loaded fadeIn");

    });
    
    /* - 1.5. Owl Carousel
    ========================================================================== */
    $(".testmonial-carousel").owlCarousel({
        autoPlay: 10000,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        transitionStyle: "fade"
    });
	
	$(".recruiters-carousel").owlCarousel({
        autoPlay: 7000,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        transitionStyle: "fade"
    });
	
    $("#media-carousel").owlCarousel({
        items: 3,
        slideSpeed: 300,
        paginationSpeed: 400,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        itemsMobile: [480, 1],
        transitionStyle: "fade"
    });
});
