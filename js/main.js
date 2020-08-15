$(document).ready(function () {
    $('.slider').bxSlider();
    $('#gallery #item').hover(

        function () {
            $(this).animate({
                marginTop: "-=1%",
            }, 200);
        },

        function () {
            $(this).animate({
                marginTop: "0%",
            }, 200);
        }
    );
});

$(".owl_gallery").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
        0: {
            item: 1
        },
        600: {
            item: 3
        },
        1000: {
            item: 3
        }
    }
});