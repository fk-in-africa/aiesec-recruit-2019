// Recipient
/*
var SENDTO = {
"hd": "hokkaido@aiesec.jp",
"sd": "sendai@aiesec.jp",
"ag": "ag.shinkan1617@aiesec.jp",
    "ch": "mc_tm_com@aiesec.jp",
    "hi": "mc_tm_com@aiesec.jp",
    "jo": "mc_tm_com@aiesec.jp",
"ko": "risako.okabe@aiesec.jp",
"mj": "aiesec_meiji@aiesec.jp",
    "sfc": "mc_tm_com@aiesec.jp",
"sp": "speb.contact@gmail.com",
"tkb": "TKB_Recruiting@googlegroups.com",
"to": "tokyo@aiesec.jp",
"wa": "ayaka.ikematsu@aiesec.jp",
"na": "aiesec.nagoya.shinkan@gmail.com",
"ni": "ni.1617.aiesec@gmail.com",
    "nz": "mc_tm_com@aiesec.jp",
    "do": "mc_tm_com@aiesec.jp",
    "kb": "mc_tm_com@aiesec.jp",
"kg": "kwansei_gakuin@aiesec.jp",
"kt": "shinkan.aieseckt1617@gmail.com",
    "oi": "mc_tm_com@aiesec.jp",
"os": "hey.osaka-u@aiesec.jp",
    "sg": "mc_tm_com@aiesec.jp",
    "hu": "mc_tm_com@aiesec.jp",
"apu": "shota.maekawa@aiesec.jp"
}
*/
var SENDTO = {
  "ag": "aoyama@aiesec.jp",
  "apu": "apu@aiesec.jp",
  "ch": "chuo@aiesec.jp",
  "do": "doshisha@aiesec.jp",
  "hd": "hokkaido@aiesec.jp",
  "hi": "hit@aiesec.jp",
  "hu": "hiroshima@aiesec.jp",
  "jo": "sophia@aiesec.jp",
  "kb": "kobe@aiesec.jp",
  "kg": "kwansei_gakuin@aiesec.jp",
  "ko": "keio@aiesec.jp",
  "kt": "kyoto@aiesec.jp",
  "mj": "meiji@aiesec.jp",
  "na": "nagoya@aiesec.jp",
  "ni": "nagoya-city@aiesec.jp",
  "nz": "nanzan@aiesec.jp",
  "oi": "osaka-city@aiesec.jp",
  "os": "osaka@aiesec.jp",
  "sd": "sendai@aiesec.jp",
  "sfc": "sfc@aiesec.jp",
  "sg": "shiga@aiesec.jp",
  "sp": "rikkyo@aiesec.jp",
  "tkb": "tsukuba@aiesec.jp",
  "to": "tokyo@aiesec.jp",
  "wa": "waseda@aiesec.jp",
}

var appMaster = {

    preLoader: function(){
        imageSources = []
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    },

    smoothScroll: function() {
        // Smooth Scrolling
        $('a[href*=#]:not([href=#carousel-example-generic])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    },

    reviewsCarousel: function() {
        // Reviews Carousel
        $('.review-filtering').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    },

    screensCarousel: function() {
        // Screens Carousel
        $('.filtering').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.js-filter-all').on('click', function() {
            $('.filtering').slickUnfilter();
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-one').on('click', function() {
            $('.filtering').slickFilter('.one');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-two').on('click', function() {
            $('.filtering').slickFilter('.two');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-three').on('click', function() {
            $('.filtering').slickFilter('.three');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

    },

    animateScript: function() {
        $('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'100%'});
        $('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'100%'});
        $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
        $('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'100%'});
        $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
    },

    revSlider: function() {

        var docHeight = $(window).height();


        var mainSlider = $('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: docHeight,
            hideThumbs: 10,
            touchenabled: false,
            fullWidth: "on",
            hideTimerBar: "on",
            fullScreen: "on",
            onHoverStop: "off",
            fullScreenOffsetContainer: ""
        });
        
    },

    scrollMenu: function(){
        var num = 50; //number of pixels before modifying styles
        if ($(window).scrollTop() > num) {
            $('nav').addClass('scrolled');
        }
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('nav').addClass('scrolled');

            } else {
                $('nav').removeClass('scrolled');
            }
        });

        $('ul.navbar-nav li a').bind('click', function(){
            if($(this).closest('.navbar-collapse').hasClass('in')){
                $(this).closest('.navbar-collapse').removeClass('in');
            }
        });
        
    },
    placeHold: function(){
        // run Placeholdem on all elements with placeholders
        Placeholdem(document.querySelectorAll('[placeholder]'));
    }

}; // AppMaster


$(document).ready(function() {

    $("#sel1").change(function(){
        $("#recipient").val(SENDTO[$(this).val()]);
    });
    
    appMaster.smoothScroll();

    appMaster.reviewsCarousel();

    appMaster.screensCarousel();

    appMaster.animateScript();

    appMaster.revSlider();

    appMaster.scrollMenu();

    appMaster.placeHold();

});
