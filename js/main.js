(function ($) {
    "use strict";
    // Initiate the wowjs
    new WOW().init();

    let navbarHeight = 0;
    $(window).ready(() => {
        setTimeout(
            () => {
                if ($('html, body').scrollTop() <= 660) {
                    $('html, body').animate({ scrollTop: 662 }, 3000);
                }
            }, 5000);
    })
    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        const scrollPosition = $(this).scrollTop() || 1;
        if (scrollPosition > 300) {
            navbarHeight = $('#navbar').outerHeight();
        }
        if (scrollPosition <= 738) {
            const imageSize = 100 - ((100 / 738) * scrollPosition);
            $('.main-screen a').css("height", `${imageSize}vh`);
            $('.main-screen a').css("width", `${imageSize}%`);
            $('.main-screen a').css("marginTop", `${scrollPosition}px`);
            $('.main-screen a').css("opacity", `${imageSize / 100}`);
        }
    })
    // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 200) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 20000, 'easeInOutExpo');
        return false;
    });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 738 - 300) {
            $('.nav-bar').addClass('d-block');
        } else {
            $('.nav-bar').removeClass('d-block');
        }
        if ($(this).scrollTop() > 738 - 300) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });


    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({ "position": "relative", "height": "160px" });


    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);

