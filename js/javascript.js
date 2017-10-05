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
                $body.toggleClass('overflowHidden');
                window.scrollTo(0, 0);
                if ($body.hasClass('menuOpen')) {
                    $('.menu').find('li').addClass('fadeInRight animated');
                } else {
                    $('.menu').find('li').removeClass('fadeInRight animated');
                }
            };

            function pageChange(e) { // let's make this cool as fuck
                var $currentPage = $('page.active'),
                    $link = $(this).attr('href').replace('.html', ''),
                    $targetPage = $('#' + $link);

                // Basic conditions to know the linked object exists, isn't an external link, and isn't currently active.
                if ($targetPage.length != 0 && $(this).attr('target') != '_blank' && !$targetPage.hasClass('active')) {
                    e.preventDefault();
                    $currentPage.addClass('hideFirst');
                    $currentPage.addClass('hideSecond');
                };
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

                    var $currentPage = $('page.active'),
                        $link = $(this).attr('href').replace('.html', ''),
                        $targetPage = $('#' + $link);
                    if ($targetPage.length != 0) {
                        e.preventDefault();
                    }
                    if ($targetPage.length != 0 && $(this).attr('target') != '_blank' && !$targetPage.hasClass('active')) {
                        e.preventDefault();
                        $('page').removeClass('active');
                        $targetPage.addClass('active');
                    }

                    //if ($(this).closest('.menu').length == 0) { // if it's on desktop
                        // Basic conditions to know the linked object exists, isn't an external link, and isn't currently active.
                        //            if ($targetPage.length != 0 && $(this).attr('target') != '_blank' && !$targetPage.hasClass('active')) {
                        //                $currentPage.addClass('beingMoved');
                        //                $targetPage.addClass('beingMoved');
                        //                $currentPage.addClass('hideFirst'); // zoom the page in
                        //                $targetPage.addClass('showFirst').delay(750).queue(function () { // slide it over after .75seconds
                        //                    $currentPage.addClass("hideSecond");
                        //                    $targetPage.addClass('showSecond').dequeue();
                        //                }).delay(750).queue(function () { // finish after .75seconds
                        //                    $targetPage.addClass('showFinal').dequeue();
                        //                }).delay(750).queue(function () { // finish after .75seconds
                        //                    $targetPage.addClass('active').removeClass('beingMoved showFirst showSecond showFinal');
                        //                    $currentPage.removeClass('active beingMoved hideFirst hideSecond').dequeue();
                        //                }).delay(750).queue(function () { // finish after .75seconds
                        //                    $currentPage.removeClass('active beingMoved hideFirst hideSecond');
                        //                    $targetPage.addClass('active').removeClass('beingMoved showFirst showSecond showFinal').dequeue();
                        //                });
                        //            };
                        //        } else { // if it's from the mobile drawer
                        //  }
                        window.location.hash = '#' + $link;
                    });

                $(window).scroll(function () { // change proper header colors based on scroll position
                    headerScroller();
                });

                $mobileHeaderTrigger.on('click', function () { // show / hide mobile menu
                    mobileHeader();
                });

                $(window).scroll(function () { // initiate plugin
                    $('.animateMePlz').animateMePlz();
                });

                $('.pageOverlay').on('click', function () {
                    if ($(this).parent().hasClass('active')) {
                        mobileHeader();
                    }
                });

                $mobileHeader.find('a').on('click', function () {
                    mobileHeader();
                });
            });
