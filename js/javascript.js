$(document).ready(function () {
    var $header = $('.mainHeader'),
        $headerHeight = $header.height(),
        $meter = $('section').first().height(),
        $mobileHeader = $('.menu'),
        $mobileHeaderTrigger = $('.menuTrigger'),
        $body = $('body');

    function headerScroller() {
        $scrolled = $(window).scrollTop();
        if ($scrolled > $meter - 100) {
            $header.addClass('active');
        } else {
            $header.removeClass('active');
        }
    };
    
    function mobileHeader(){
        $mobileHeader.toggleClass('active');
        $body.toggleClass('overflowHidden');
    };
    
    headerScroller(); // initiate proper header colors based on scroll position

    $(window).scroll(function () { // change proper header colors based on scroll position
        headerScroller();
    });
    
    $mobileHeaderTrigger.on('click', function(){ // show / hide mobile menu
        mobileHeader()
    })
});