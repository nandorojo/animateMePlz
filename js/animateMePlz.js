(function ($) {

    $.fn.animateMePlz = function (options) {

        // Default options
        var settings = $.extend({
            threshold: 50,
            animationStyle: 'fadeIn',
            repeat: 'repeat',
            animationDelay: '.45s'
        }, options);

        var $windowHeight = $(window).height(),
            $scrolled = $(window).scrollTop(),
            $threshold = settings.threshold,
            $animationStyle = settings.animationStyle,
            $repeat = settings.repeat,
            $animationDelay = settings.animationDelay;

        this.each(function () {
            var $elementOffset = $(this).offset().top, // distance from div to document top
                $delayMePlz = $(this).attr('data-thresholdplz'),
                $animateMePlz = $(this).attr('data-animationstyleplz'),
                $animationDelayPlz = $(this).attr('data-animationdelayplz'),
                $repeatPlz = $(this).attr('data-repeatplz'); // attribute for element's scroll threshold

            // define scroll delay threshold
            if (typeof $delayMePlz !== typeof undefined && $delayMePlz !== false) { // If given has scroll threshold attribute defined
                $threshold = parseInt($delayMePlz); // Set delay threshold to the defined pixel amount
            } else { // TODO is this redundant?
                $threshold = settings.threshold;
            }

            // define animation style
            if (typeof $animateMePlz !== typeof undefined && $animateMePlz !== false) { // If animation style attribute defined
                $animationStyle = $animateMePlz; // Set animation style to this div's specific attribute
            } else { // TODO is this redundant?
                $animationStyle = settings.animationStyle; // Fallback to default or overridden user option from plugin
            }

            // define animation style
            if (typeof $repeatPlz !== typeof undefined && $repeatPlz !== false) { // If animation style attribute defined
                $repeat = $repeatPlz; // Set animation style to this div's specific attribute
            } else { // TODO is this redundant?
                $repeat = settings.repeat; // Fallback to default or overridden user option from plugin
            }

            // define animation style
            if (typeof $animationDelayPlz !== typeof undefined && $animationDelayPlz !== false) { // If animation style attribute defined
                $animationDelay = $animationDelayPlz; // Set animation style to this div's specific attribute
            } else { // TODO is this redundant?
                $animationDelay = settings.animationDelay; // Fallback to default or overridden user option from plugin
            }

            $(this).css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            })

            // return
            if ($scrolled + $windowHeight >= $elementOffset - $threshold) {
                $(this).show();
                return $(this).addClass('animated ' + $animationStyle);
            } else {
                if ($repeat != 'noRepeat') {
                    return $(this).removeClass('animated ' + $animationStyle);
                }
            }
        });
    };

}(jQuery));
