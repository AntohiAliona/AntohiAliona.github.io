'use strict';

$(function () {
 
    /*quoteSlider*/
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        fade: false,
        appendArrows: '.slider-arrows',
        prevArrow: '<i class="fas fa-chevron-left">',
        nextArrow: '<i class="fas fa-chevron-right">',
        cssEase: 'linear',
        dots: true,
        appendDots: '.slider-dots',  
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        speed: 500,
        autoplaySpeed: 3000,
        
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    vertical: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical: true,
                    slidesToShow: 1,
                }
            },
        ]  
    });
});
