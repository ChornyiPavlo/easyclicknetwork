(function ($) {
    "use strict";


    // ------------------------------------------------------------------------------ //
    // Preloader
    // ------------------------------------------------------------------------------ //


    $(window).on('load', function () {
        if ($(".pre-loader-wrap").length > 0) {
            $(".pre-loader-wrap").fadeOut("slow");
        }
    });


    // ------------------------------------------------------------------------------ //
    // Scroll Top
    // ------------------------------------------------------------------------------ //

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 600) {
            $(".scroll-top").fadeIn(600);
        } else {
            $(".scroll-top").fadeOut(600);
        }
    });

    $(".scroll-top").on("click", function () {
        $("html,body").animate({
                scrollTop: 0
            },
            500
        );
        return false;
    });


    // ------------------------------------------------------------------------------ //
    // Main Menu
    // ------------------------------------------------------------------------------ //

    $('#dopeNav').dopeNav();

    // ------------------------------------------------------------------------------ //
    // Counter Carousel
    // ------------------------------------------------------------------------------ //


    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function () {
        $('.odometer').each(function () {
            if ($(this).isInViewport()) {
                setTimeout(function () {
                    $('.odometer_number_one').html('400');
                    $('.odometer_number_two').html('45');
                    $('.odometer_number_three').html('200');
                    $('.odometer_number_four').html('10');
                }, 5);
            } else {
            }
        });
    });

    // ------------------------------------------------------------------------------ //
    // Tilt Effect
    // ------------------------------------------------------------------------------ //

    $('.single-service').tilt({
        speed: 3000, // Speed of the enter/exit transition.
        transition: true, // Set a transition on enter/exit.
        scale: 1.06
    })

    // ------------------------------------------------------------------------------ //
    // Testimonial Carousel
    // ------------------------------------------------------------------------------ //

    $(".testimonial-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 15,
        nav: true,
        slideSpeed: 1200,
        smartSpeed: 500,
        autoplay: false,
        navText: [
            '<i class="icofont-arrow-left"></i>',
            '<i class="icofont-arrow-right"></i>'
        ],
        navContainer: '#leftNav',
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 2
            }
        }

    });


    // ------------------------------------------------------------------------------ //
    // Brand Logo Carousel
    // ------------------------------------------------------------------------------ //

    $(".brand-logo-carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 6,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    // ------------------------------------------------------------------------------ //
    // Portfolio Carousel
    // ------------------------------------------------------------------------------ //

    $(".portfolio-carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 1,
        autoplay: true,
        dots: true,
    });

    $(".portfolio-carusel-wrap").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 15,
        responsive: {
            1200: {
                items: 4
            },
            1199: {
                items: 3
            }
        }
    });


    $(".portfolio-carusel-wrap-two").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 15,
        dots: false,
        navText: [
            '<i class="icofont-arrow-left"></i>',
            '<i class="icofont-arrow-right"></i>'
        ],
        navContainer: '#leftNav',
        responsive: {
            1200: {
                items: 4
            },
            1199: {
                items: 3
            }
        }
    });


    // ------------------------------------------------------------------------------ //
    // Portfolio Filter
    // ------------------------------------------------------------------------------ //


    $(".filter-button").on('click', function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }

    $(this).addClass("active");

    $('.filter-list li').on('click', function (e) {
        e.preventDefault();
        $('li').removeClass('active');
        $(this).addClass('active');
    });


    // ------------------------------------------------------------------------------ //
    // Contact Form
    // ------------------------------------------------------------------------------ //

    var submitContact = $("#submit-message"),
        message = $("#msg");

    submitContact.on("click", function (e) {
        e.preventDefault();

        // Сброс сообщений об ошибках
        $(".error-message").hide();
        $(".form-control").removeClass("error");

        var isValid = true;

        // Проверка полей
        if ($("#name").val().trim() === "") {
            $("#name-error").text("Name is required").show();
            $("#name").addClass("error");
            isValid = false;
        }

        if ($("#mail").val().trim() === "") {
            $("#mail-error").text("Email is required").show();
            $("#mail").addClass("error");
            isValid = false;
        } else if (!validateEmail($("#mail").val())) {
            $("#mail-error").text("Invalid email format").show();
            $("#mail").addClass("error");
            isValid = false;
        }

        if ($("#subject").val().trim() === "") {
            $("#subject-error").text("Subject is required").show();
            $("#subject").addClass("error");
            isValid = false;
        }

        if ($("#messege").val().trim() === "") {
            $("#messege-error").text("Message is required").show();
            $("#messege").addClass("error");
            isValid = false;
        }

        if (isValid) {
            // Если все поля валидны, отправляем данные
            var data = $("#contact-form").serialize();
            message
                .hide()
                .removeClass("success error")
                .addClass("success")
                .html("Your message has been sent successfully")
                .fadeIn("slow")
                .delay(1000)
                .fadeOut("slow");

            $("#contact-form").find("input[type=text], input[type=email], textarea").val(""); // Очистка формы
        }
    });

// Функция для проверки email
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }


    jQuery(document).ready(function ($) {
        var form = document.getElementById("contactForm");
        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("contactForm").reset();
                setTimeout(() => {
                    document.getElementById("successMessage").style.display = "none";
                }, 5000);
            });
        }
    });

    jQuery(document).ready(function ($) {
        var form = document.getElementById("subscribeForm");
        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                document.getElementById("subscribeMessage").style.display = "block";
                document.getElementById("subscribeForm").reset();
                setTimeout(() => {
                    document.getElementById("subscribeMessage").style.display = "none";
                }, 5000);
            });
        }
    });

})(jQuery);