$(document).ready(function () {

    var $header = $('.mainHeader'),
        $headerHeight = $header.height(),
        $meter = $('section').first().height(),
        $mobileHeader = $('.menu'),
        $mobileHeaderTrigger = $('.menuTrigger'),
        $body = $('body');

    function headerScroller() {
        $scrolled = $(window).scrollTop();
        if ($scrolled > 100) {
            $header.addClass('active');
        } else {
            $header.removeClass('active');
        }
    };

    function mobileHeader() {
        $body.toggleClass('menuOpen');
        $header.toggleClass('hideUp');
        $('page.active .pageOverlay').toggleClass('active');
    };

    if (window.location.hash) {
        var hash = window.location.hash.substring(1), //Puts hash in variable, and removes the # character
            splitHash = hash.replace('#', ''),
            $newPage = $("#" + splitHash);
        if ($newPage.length != 0) {
            $('page').removeClass('active');
            $newPage.addClass('active');
        }
    };

    headerScroller(); // initiate proper header colors based on scroll position

    $('a[href$=".html"]').on('click', function (e) {
        var $link = $(this).attr('href').replace('.html', ''),
            $newPage = $('#' + $link);
        if ($newPage.length != 0 && $(this).attr('target') != '_blank') {
            e.preventDefault();
            $('page').removeClass('active');
            $newPage.addClass('active');
        }
        window.location.hash = '#' + $link;
    });
    
    $(window).scroll(function () { // change proper header colors based on scroll position
        headerScroller();
    });

    $mobileHeaderTrigger.on('click', function () { // show / hide mobile menu
        mobileHeader()
    });

    $(window).scroll(function () { // initiate plugin
        $('.animateMePlz').animateMePlz();
    });

    $mobileHeader.find('a').on('click', function () {
        mobileHeader()
    });
});
