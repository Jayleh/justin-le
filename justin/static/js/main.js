$(document).ready(function () {

    // Parallax Effect
    $(window).scroll(function () {
        let wScroll = $(this).scrollTop();

        $('#impression h2').css({
            'transform': 'translate(0px, -' + wScroll / 4 + '%)'
        });

        $('#impression p').css({
            'transform': 'translate(0px, -' + wScroll / 2 + '%)'
        });

        $('#visual').css({
            'transform': 'translate(0px, -' + wScroll / 10 + '%)'
        });

    });

});