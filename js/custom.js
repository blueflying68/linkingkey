$(function() {
    //index brandLogo slider
    $('.partner-slider').slick({
        infinite: true,
        rows: 3,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true,
        dots: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                rows: 2,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }]
    });
    //language bar dropdown
    $(".languageBar a").on("click", function() {
        $(this).toggleClass("show");
        $(this).next().slideToggle();
    });
    $(".dorpdown-menu a").on("click", function() {
        var thisLink = $(this).text();
        $(".languageBar a").html(thisLink + '<i class="fas fa-caret-down"></i>');
        $(this).parent().hide();
        $(this).parent().prev().find("a").removeClass("show");
    });
    $(document).mouseup(function(e) {
        var _con4 = $(".languageBar > a");
        if (!_con4.is(e.target) && _con4.has(e.target).length === 0) {
            _con4.next('.dorpdown-menu').hide();
            _con4.removeClass('show');
            event.stopPropagation();
        }
    });
    //login modal
    $('a[href="#modalSignin"]').on("click", function() {
        var target = $(this.hash);
        if (target.is(':visible')) {
            $(".modal-backdrop").remove();
            target.removeClass('in').animate({
                'opacity': 0,
                'top': '-25%',
            }, 'fast').fadeOut();
        } else {
            $('body').append('<div class="modal-backdrop fade in"></div>');
            target.addClass('in').animate({
                'opacity': 1,
                'top': '15%',
            }, 'fast').show();
        }
    });
    $(".btn-close").click(function(event) {
        $(this).parents('.modal').removeClass('in').animate({
            'opacity': 0,
            'top': '-25%',
        }, 'fast').fadeOut();
        setTimeout(function() {
            $(".modal-backdrop").remove();
        }, 200);
    });
    $("body").on('click', '.modal-backdrop', function(event) {
        $(".modal").removeClass('in').animate({
            'opacity': 0,
            'top': '-25%',
        }, 'fast').fadeOut();
        setTimeout(function() {
            $(".modal-backdrop").remove();
        }, 200);
    });
})
//手機頁尾連結展開
var mediaQuery = window.matchMedia('(max-width: 576px)');
if (mediaQuery.matches) {
    $(".foot-link").addClass('mbShow');
    $(".mbShow .foot-link__item h4").on("click", function() {
        var s = $(this).next().css('display');
        if ($(this).next().css('display') == 'none') {
            $(this).parents('.foot-link').find('ul').slideUp();
            $(this).next().slideDown();
            stopPropagation();
        } else {
            $(this).next().slideUp();
            stopPropagation();
        }
    });
}

function windowResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (width < 576) {
        $(".foot-link").addClass('mbShow');
        $(".mbShow .foot-link__item h4").on("click", function() {
            var s = $(this).next().css('display');
            if ($(this).next().css('display') == 'none') {
                $(this).parents('.foot-link').find('ul').slideUp();
                $(this).next().slideDown();
                stopPropagation();
            } else {
                $(this).next().slideUp();
                stopPropagation();
            }
        });
    } else {
        $(".foot-link").removeClass('mbShow');
    }
}
window.addEventListener('resize', windowResize);