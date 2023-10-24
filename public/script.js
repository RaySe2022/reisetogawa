import Plotly from 'plotly.js-dist-min'

$(document).ready(function() {
    $(window).on('scroll', function() {
        // Reset the styles on all icons in the side-nav
        $('.side-nav span').css({
            'background-color': 'transparent',
            'color': 'black',
            'transform': 'rotate(45deg)'
        }).removeClass('active');

        // Check which section is in view and style the corresponding icon in the side-nav
        $('#section2,#section3,#section4, .landing').each(function(index) {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();

            if ($(window).scrollTop() >= top && $(window).scrollTop() <= bottom) {
                var correspondingIcon = $('.side-nav span').eq(index);
                correspondingIcon.css({
                    'background-color': 'black',
                    'color': 'white',
                    'transform': 'rotate(45deg) scale(1.2)'
                }).addClass('active');
                return false; // Exit the loop
            }
        });
    });
});


