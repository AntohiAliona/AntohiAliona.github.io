'use strict';

$(function () {
    /*Fixed Header*/
    let header = $('#header'),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockOffset
        }, 700);
    });

    /*Nav-toggle*/
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /*Collapse*/

    $(document).ready(function () {

        $('.accordion__header').click(function () {
            $(this).toggleClass('active').next().slideToggle();
            $('.accordion__header').not(this).removeClass('active').next().slideUp();
        });

    });
    
    /*quoteSlider*/
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        fade: false,
        prevArrow: '<i class="fas fa-chevron-left">',
        nextArrow: '<i class="fas fa-chevron-right">',
    });
});
