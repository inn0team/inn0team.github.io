$(function() {
    $('#main').fullpage({
        sectionsColor: ['#ffffff', '#333', '#f0f0f0', '#333'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        css3: true,
        navigation: true, // 显示导航
        navigationTooltips: ['首页', '文章', '成员', '介绍'],
        afterLoad: function(anchorLink, index) {
            if (index == 2) {
                $('.alist').addClass('animated rollIn');
                $('.alist').css('display', 'block');
            }
            if (index == 3) {
                $('.userList').css('display', 'block');
                $('.u1').addClass('animated rotateInDownLeft');
                $('.u2').addClass('animated bounceInDown');
                $('.u3').addClass('animated bounceInDown');
                $('.u4').addClass('animated bounceInDown');
                $('.u5').addClass('animated rotateInDownRight');
                $('.u6').addClass('animated bounceInLeft');
                $('.u7').addClass('animated pulse');
                $('.u8').addClass('animated flip');
                $('.u9').addClass('animated pulse');
                $('.u10').addClass('animated bounceInRight');
                $('.u11').addClass('animated bounceInLeft');
                $('.u12').addClass('animated pulse');
                $('.u13').addClass('animated flip');
                $('.u14').addClass('animated pulse');
                $('.u15').addClass('animated bounceInRight');
                $('.u16').addClass('animated rotateInUpLeft');
                $('.u17').addClass('animated bounceInUp');
                $('.u18').addClass('animated bounceInUp');
                $('.u19').addClass('animated bounceInUp');
                $('.u20').addClass('animated rotateInUpRight');
            }
            if (index == 4) {

            }
        }
    });


    $('.desc').addClass('animated rollIn');
    $('.bglogo1').addClass('animated fadeInDown');
    $('.bglogo').addClass('xuanzhuang');
    $('.bglogo').show(1000);

    $(window).resize(function() {
        autoScrolling();
    });

    function autoScrolling() {
        var $ww = $(window).width();
        if ($ww < 1024) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();
});
