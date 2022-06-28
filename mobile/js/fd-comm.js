$(function(){
    // 푸터 펼치기 이벤트
    $('.bot-tit').click(clickFooter);
    // 상단 검색창 클릭시 노출
    //$('#top #topsearch .search-tit').click(clickSearchBtn);
    // 이미지 없을 때
    //$('img').error(errorImg);
    // 상세페이지 하단 안내정보
    $('.bot-info-top').click(clickDetailBotinfo);
    
    // 사이드메뉴 tab 클릭시
    $('#slidemenu .tab li').click(clicksideMenuTab);
    
    // footer 내비
    $(window).scroll(hideNaviEvent);
    
    //상품정보 할인율 없을때 css
    prdInfoSaleNone();
});

//상품정보 할인율 없을때 css
function prdInfoSaleNone(){
    var target = $('.fd-prdList > li.xans-record-');

    for(i=0; i< target.length; i++)
    {
        var info = target.eq(i).find('ul.spec li');
        if(info.length === 1)
        {
            target.eq(i).find('ul.spec li:nth-child(1)').find('span').css({'color':'#000', 'font-size':'14px', 'font-weight':'500'});
        }
        
        var search_target = target.eq(i).find('.prices').text();

        if(search_target == ""){
            target.eq(i).find('.price strike').css({'color':'#000', 'font-size':'14px', 'text-decoration':'none'});
        }
    }
}

// 사이드메뉴 tab 클릭시
function clicksideMenuTab(e){
    var target = $(e.currentTarget);
    var target_name = target.attr('class');
    var target_name_split = target_name.split(' ')[0];
    
    $('#slidemenu .tab li').removeClass('active');
    $('#slidemenu .inner .menu-cont').removeClass('active');
    
    $('.' + target_name_split).toggleClass('active');
}

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
}

// 메인 상단 배너
$(function(){
    var topBanner = new Swiper('#section1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
    });
});


/*$(function(){
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
});*/