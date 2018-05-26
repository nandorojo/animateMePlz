(function ($) {

    $.fn.animateMePlz = function (options) {

        // Default options
        var settings = $.extend({
            threshold: 50,
            animationStyle: 'fadeIn',
            repeat: 'repeat',
            animationDelay: '.45s',
            animationDuration: '.5s'
        }, options);

        var windowHeight = $(window).height(),
            scrolled = $(window).scrollTop()

        this.each(function () {
            var $elementOffset = $(this).offset().top, // distance from div to document top
                $delayMePlz = $(this).data('thresholdplz'),
                $animateMePlz = $(this).data('animationstyleplz'),
                $animationDelayPlz = $(this).data('animationdelayplz'),
                $animationDuration = $(this).data('animationdurationplz'),
                $repeatPlz = $(this).data('repeatplz'); // attribute for element's scroll threshold

            // define scroll delay threshold
            if (typeof $delayMePlz !== typeof undefined && $delayMePlz !== false) { // If given has scroll threshold attribute defined
                settings.threshold = parseInt($delayMePlz); // Set delay threshold to the defined pixel amount
            }
            // define animation style
            if (typeof $animateMePlz !== typeof undefined && $animateMePlz !== false) { // If animation style attribute defined
                settings.animationStyle = $animateMePlz; // Set animation style to this div's specific attribute
            }

            // define animation repitition
            if (typeof $repeatPlz !== typeof undefined && $repeatPlz !== false) { // If animation style attribute defined
                settings.repeat = $repeatPlz; // Set animation style to this div's specific attribute
            }
            // define animation style
            if (typeof $animationDelayPlz !== typeof undefined && $animationDelayPlz !== false) { // If animation style attribute defined
                settings.animationDelay = $animationDelayPlz; // Set animation style to this div's specific attribute
            }
            // define animation duration
            if (typeof $animationDuration !== typeof undefined && $animationDuration !== false) { // If animation style attribute defined
                settings.duration = $animationDelayPlz; // Set animation style to this div's specific attribute
            }

            $(this).css({
                'animation-delay': settings.animationDelay,
                '-webkit-animation-delay': settings.animationDelay,
                'opacity': '0',
                'visibility': 'hidden'
            });

//            if (settings.repeat != 'noRepeat') {
                $(this).removeClass('animated ' + settings.animationStyle);
//            }

            // return
            if (scrolled + windowHeight >= $elementOffset - settings.threshold) {
                $(this).css({
                    'opacity': '1',
                    'visibility': 'visible'
                });
                $(this).addClass('animated ' + settings.animationStyle);
                return;
            }
        });
    };
}(jQuery));
