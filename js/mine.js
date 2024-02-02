$(document).ready(function () {
    
    $('.iverson').mouseover(function () {
        $('.top_bar').addClass('border_btm_red')
        $('.top_bar').removeClass('border_btm_white')
    });

    $('.iverson').mouseout(function () {
        $('.top_bar').addClass('border_btm_white')
        $('.top_bar').removeClass('border_btm_red')
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.gotop').css({ opacity: 1.0 }).fadeIn();
        } else {
            $('.gotop').stop(true,true).fadeOut();
        }
    });

    $('.gotop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 });
        return false;
    });
});