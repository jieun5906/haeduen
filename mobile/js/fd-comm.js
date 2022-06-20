$(function(){
    // 푸터 펼치기 이벤트
    $('.bot-tit').click(clickFooter);
    // 상단 검색창 클릭시 노출
    $('#top #topsearch .search-tit').click(clickSearchBtn);
    // 이미지 없을 때
    $('img').error(errorImg);
    // 상세페이지 하단 안내정보
    $('.bot-info-top').click(clickDetailBotinfo);
    // footer 내비
    $(window).scroll(hideNaviEvent);
});

// 푸터 펼치기 이벤트
function clickFooter(e){
    var target = $(e.currentTarget);
    target.siblings('.bot-list').slideToggle();
}

// 상단 검색창 클릭시 노출
function clickSearchBtn(){    
    $('#top #topsearch').toggleClass('active');
    $('#top #topsearch .search-bar input[type=text]').focus();
}

// 이미지 없을 때
function errorImg(){
    $(this).remove();
}

// 상세페이지 하단 안내정보
function clickDetailBotinfo(e){
    var target = $(e.currentTarget);

    target.find('.it-right').toggleClass('xi-minus');
    target.siblings('.bot-info-bot').slideToggle();
}

// footer 내비
function hideNaviEvent(){
    var navi = $('#fp-nav.fp-right');
    var target =  $('#section5');

    if(target.hasClass('active'))
    {
        navi.css('display', 'none');
    }
    else
    {
        navi.css('display','block');
    }
    console.log('test');
}


$(function(){
    var topBanner = new Swiper('.top-banner.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    var main_visual1 = new Swiper('#section1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        //effect: 'fade',
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
});