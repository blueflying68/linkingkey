$(function() {
    //language bar dropdown
    $(".languageBar .nav-link").on("click", function() {
        $(this).toggleClass("show");
        $(this).next().slideToggle();
    });
    $(".dorpdown-menu .dorpdown-item").on("click", function() {
        var thisLink = $(this).text();
        $(".languageBar .nav-link").html(thisLink + '<i class="fas fa-caret-down"></i>');
    });
    $(document).mouseup(function(e) {
        var _con4 = $(".languageBar .nav-link");
        if (!_con4.is(e.target) && _con4.has(e.target).length === 0) {
            _con4.next('.dorpdown-menu').hide();
            _con4.removeClass('show');
            event.stopPropagation();
        }
    });
    //購物車指定頁面出現
    var shoppingCart = $("#page-shoppingCart").size();
    if (shoppingCart == 0) {
        $(".nav-link li").last().hide();
    }
    //功能主頁選單下拉
    $(".headshot,.nav-link li a").on('click', function(e) {
        if ($(this).hasClass('show')) {
            $(this).removeClass('show');
            $(this).next('.dropdown-menu').slideUp();
            event.stopPropagation();
        } else {
            $(".dropdown-menu").hide();
            $(this).addClass('show');
            $(this).next('.dropdown-menu').slideDown();
            event.stopPropagation();

            var n = $(".lk-scroller-notification a").length / 2;

            var htotal = 0;
            for (var i = 0; i < n; i++) {
                var h = $(".lk-scroller-notification a").eq(i).outerHeight();
                htotal += h;
                var lsnHeight = htotal - 13;
                $(".lk-scroller-notification").height(lsnHeight);
            }
        }
    });
    $(document).mouseup(function(e) {
        var _con = $(".headshot");
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            _con.removeClass('show');
            _con.next('.dropdown-menu').hide();
            event.stopPropagation();
        }
    });
    $(document).mouseup(function(e) {
        var _con2 = $(".nav-link > li > a");
        if (!_con2.is(e.target) && _con2.has(e.target).length === 0) {
            _con2.removeClass('show');
            _con2.next('.dropdown-menu').hide();
            event.stopPropagation();
        }
    });
    //搜尋
    $(".sch-mb").on('click', function(e) {
        if ($(this).hasClass('show')) {
            $(this).removeClass('show');
            $(".logo,.search,.navtop").removeClass('show');
            $(this).show();
            event.stopPropagation();
        } else {
            $(this).addClass('show');
            $(".logo,.search,.navtop").addClass('show');
            $(this).hide();
            event.stopPropagation();
        }
    });
    $(document).mouseup(function(e) {
        var _con3 = $(".search input");
        if (!_con3.is(e.target) && _con3.has(e.target).length === 0) {
            $(".logo,.search,.navtop").removeClass('show');
            $(".sch-mb").removeClass('show').show();
            event.stopPropagation();
        }
    });
    //人脈輪播
    $(".connection__silder").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    //推薦人脈
    $(".rc-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 5000,
        dots: false,
    });
    //顯示更多
    $(".sch-result-container").slice(0, 6).show();
    $(".sch-viewMore").click(function(e) {
        e.preventDefault();
        $(".sch-result-container:hidden").slice(0, 10).show();
        if ($(".sch-result-container:hidden").length == 0) {
            $(".sch-viewMore").hide();
        }
    });
    //文章分類收合
    $(".category__menu--dropdown").hide();
    $(".category__menu--link").on('click', function(e) {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
            $(this).next('.category__menu--dropdown').slideUp();
        } else {
            $(".category__menu--link").removeClass('active');
            $(".category__menu--dropdown").slideUp();
            $(this).addClass('active');
            $(this).next('.category__menu--dropdown').slideDown();
        }
    });
    //顯示更多
    $(".topicality__card").slice(0, 5).show();
    $(".topicality__card--more").click(function(e) {
        e.preventDefault();
        $(".topicality__card:hidden").slice(0, 5).show();
        if ($(".topicality__card:hidden").length == 0) {
            $(".topicality__card--more").hide();
        }
    });
    //留言討論排序
    $(".msgSort .sort-txt").on('click', function(e) {
        if ($(this).hasClass('new')) {
            $(this).removeClass('new');
            $(this).html('最舊<img src="images/main/icon-sort.svg">');
            event.stopPropagation();
        } else {
            $(this).addClass('new');
            $(this).html('最新<img src="images/main/icon-sort.svg">');
            event.stopPropagation();
        }
    });
    //留言討論輸入框
    $(".editor").bind('DOMSubtreeModified', function(e) {
        var txt = $(".editor").text();
        if (txt == null || txt.length == 0) {
            $(".comment-txt").removeClass('active');
        } else {
            $(".comment-txt").addClass('active');
        }
    });
    //個人專頁編輯
    $(".edit-action").on('click', function(e) {
        var fieldC = $(this).parent('.field-header').next('.field-content').find('div');
        var valueF = fieldC.attr('contenteditable');
        var fieldInput = $(this).parent('.field-header').next('.field-content').find('.suggestags-input');
        var valueR = fieldInput.attr('readonly');
        if (valueF == 'false') {
            $('.field-content-edit').attr('contenteditable', 'true');
        }
        if (valueR == 'readonly') {
            fieldInput.removeAttr("readonly");
        }
        fieldC.next().show();
    });
    $(".saveBtn").on('click', function(e) {
        $(this).prev('.field-content-edit').attr('contenteditable', 'false');
        $(this).prev('.suggestags-field-content').find('.suggestags-input').attr("readonly", "readonly");
        $(this).hide();
    });
    //人脈排列方式
    $(".networkSort .sort-txt").on('click', function(e) {
        if ($(this).hasClass('new')) {
            $(this).removeClass('new');
            $(this).html('最近新增<img src="images/main/icon-sort.svg">');
            event.stopPropagation();
        } else {
            $(this).addClass('new');
            $(this).html('姓名筆劃<img src="images/main/icon-sort.svg">');
            event.stopPropagation();
        }
    });
    //移除人脈
    $(".perform-action .moreBtn").on("click", function() {
        $(this).toggleClass("show");
        $(this).next().toggle();
    });
    $(document).mouseup(function(e) {
        var _con5 = $(".perform-action");
        if (!_con5.is(e.target) && _con5.has(e.target).length === 0) {
            _con5.find('ul').hide();
            _con5.removeClass('show');
            event.stopPropagation();
        }
    });
    //FAQ
    $('.faq-a').hide();
    $('.faq-q').click(function() {
        $(".faq-q").next().slideUp();
        $(".faq-q").removeClass('qa-on')
        var a = $(this).parent().find('.faq-a').css('display');
        if (a == "none") {
            $(this).next().slideDown();
            $(this).addClass('qa-on');
        } else {
            $(this).next().slideUp();
            $(this).removeClass('qa-on')
        }
    });
    //頁籤
    $(".personal-setting__title a").click(function(event) {
        event.preventDefault();
        $(".personal-setting__title a").removeClass("active");
        $(this).addClass("active");
        $(".personal-setting__content").hide();
        var tab_id = $(this).data("target");
        $("#" + tab_id).show();
    });
    //個人專頁_經歷
    $(".mb-check").on('click', function(event) {
        var radioCheck = $(this).find('input[type="radio"]:checked');
        var len = radioCheck.length;
        if (len > 0) {
            $(this).parent(".mb-input").find('input[type="number"]').attr('disabled', 'disabled');
        }
    });
    $(".mb-group-btn .btn-reset").on('click', function(event) {
        $(this).parent('.mb-group-btn').prev('.mb-group').find('.end input').removeAttr('disabled');
    });
    $(".addition-action").on('click', function(event) {
        if ($(this).next(".dropdown-slider").css('display') == 'none') {
            $(".dropdown-slider").hide();
            $(this).next(".dropdown-slider").slideDown();
        } else {
            $(this).next(".dropdown-slider").slideUp();
        }
    });
    var countMax = 100,
        countMin = 0;
    $("textarea").on('keydown keyup keypress change', function(event) {
        var thisValueLength = $(this).val().length,
            countDown = countMax - thisValueLength;
        $(this).next(".count").find("span").text(countDown);
        if (countDown == countMax) {
            $(this).next(".count").find("span").text(countMin);
        }
    });
    //會員設定左側收合
    $(".member__menu--link ").on('click', function(e) {
        if ($(this).next('.member__menu--dropdown').css('display') == 'none') {
            $(this).addClass('active');
            $(this).next('.member__menu--dropdown').slideDown();
        } else {
            $(this).removeClass('active');
            $(this).next('.member__menu--dropdown').slideUp();
        }
    });
    //我的會員尊享券
    $('.mbCoupon').click(function(event) {
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
                'top': '10%',
            }, 'fast').show();
        }
    });
    $(".close-btn").click(function(event) {
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
    //加減數量計算
    $(".add-qty").on('click', function(event) {
        var maxSum = $(this).prev('.show-sum').attr('max');
        if (maxSum == 1) {
            $(this).prev('.show-sum').val(maxSum);
        } else {
            var numA = parseInt($(this).prev('.show-sum').val()) + 1;
            $(this).prev('.show-sum').val(numA);
        }
    });
    $(".reduce-qty").on('click', function(event) {
        if ($(this).next('.show-sum').val() > 0) {
            var numB = parseInt($(this).next('.show-sum').val()) - 1;
            $(this).next('.show-sum').val(numB);
        }
    });
    $(".show-sum").on('change', function(event) {
        var re = /^[0-9] .?[0-9]*/;
        if (!re.test($(this).val())) {
            var num = '0';
            $(this).val(num);
        }
    });
    //折價券選取
    $('.coupon-item input').on('click', function(event) {
        if ($(this).prop("checked")) {
            $(this).parents('.coupon-item').addClass('used');
        } else {
            $(this).parents('.coupon-item').removeClass('used');
        }
    });
    //發票資料&付款資料
    $("#invoice2").on('click', function(event) {
        $('.invoice-select__card1').show();
        $('.invoice-select__card2').hide();
    });
    $("#invoice3").on('click', function(event) {
        $('.invoice-select__card2').show();
        $('.invoice-select__card1').hide();
    });
    $(".certificate").on('change', function(event) {
        $(".certificate-input").remove();
        var ct = $(this).val();
        if (ct == 1) {
            $(this).after('<input type="text" class="certificate-input">');
            $(this).next(".certificate-input").attr('placeholder', '請輸入手機載具條碼');
        } else if (ct == 2) {
            $(this).after('<input type="text" class="certificate-input">');
            $(this).next(".certificate-input").attr('placeholder', '請輸入自然人憑證');
        } else if (ct == 3) {
            $(this).after('<input type="text" class="certificate-input">');
            $(this).next(".certificate-input").attr('placeholder', '請輸入悠遊卡隱碼');
        }
    });
    $(".apply-payment-list .form-check-input").on('click', function(event) {
        $(this).parents('.apply-form__field').find('.payment-radio__info').hide();
        $(this).parent().next('.payment-radio__info').show();
        // $('.creditCard').show();
        // $('.transfer').hide();
    });
    // $("#payment6").on('click', function(event) {
    //     $('.transfer').show();
    //     $('.creditCard').hide();
    // });
    //報名項目展開收合
    $(".btn-toggle-project").on('click', function(event) {
        if ($(".apply-inventory").css('display') == 'none') {
            $(this).html('收合<i class="fas fa-chevron-up"></i>');
            $(".apply-inventory").slideUp();
        } else {
            $(this).html('展開<i class="fas fa-chevron-down"></i>');
            $(".apply-inventory").slideDown();
        }
        $(this).toggleClass('active');
        $(".apply-inventory").slideToggle();
    });
    //RWD
    rwd_fun();
    $(window).resize(rwd_fun);
});
//RWD
function rwd_fun() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (width > 768) {
        $('.category-article,.sch-filter-wrap').addClass('scroll-fix');
    } else {
        $('.category-article,.sch-filter-wrap').removeClass('scroll-fix');
    }
    if (width > 992) {
        $('.category-article').before($('.popular-article'));
        $('.popular-article').before($('.latest-article'));
        $(".btn-group").before($(".sidebar-info"));
        $(".lkfix .intro-shadow").after($(".activ-share"));
    } else {
        $('.articleList').before($('.popular-article'));
        $('.popular-article').before($('.latest-article'));
        $(".activ-img").after($(".sidebar-info"));
        $(".sidebar-info").after($(".activ-share"));
    }
}

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