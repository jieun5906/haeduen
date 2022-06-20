$(function(){
    // 상단 검색창 클릭시 노출
    $('#top #topsearch .search-tit').click(clickSearchBtn);
    // 회원가입 동의 자세히보기
    $('.fd-detail-des').click(clickJoinDes);
    // 헤더 유저 마우스오버 이벤트
    $('.user-menu').mouseover(overUserIcon).mouseleave(leaveUserIcon);
    // faq 게시판 펼치기/접기
    $('.fd-tit-label').click(toggleFAQ);
    // 주문 하나씩 펼치기
    $('.fd-join-prev').click(clickJoinPrev);
    $('.fd-join-next').click(clickJoinNext);
    // 상품상세 리뷰
    showDetailReview();
    // $('fd-review-more').click(clickReviewMore);
    // 헤더 shop 메뉴 펼치기 이벤트
    $('.fd-shop').mouseover(overShopMenu).mouseleave(leaveShopMenu);
    // q&a 비밀글 자동설정
    //setSecretWrite();
    // 인스타그램
    $('#instagramWidgetManual').mouseover(hoverInsta);
    // 상세페이지 하단 안내정보
    $('.bot-info-top').click(clickDetailBotinfo);
    // 메인페이지 헤더 투명 이벤트
    //scrollHeaderEvent();
    //$(window).scroll(scrollHeaderEvent);
}); 

// 상단 검색창 클릭시 노출
function clickSearchBtn(){    
    $('#top #topsearch').toggleClass('active');
    $('#top #topsearch .search-bar input[type=text]').focus();
}

function clickJoinDes(e){
    var target = $(e.currentTarget);
    
    target.closest('.fd-agree-box').children('.fd-agree-des').slideToggle();
}

function overUserIcon(e){
    var target = $(e.currentTarget);

    target.children('.user-pop').addClass('active');
}

function leaveUserIcon(e){
    var target = $(e.currentTarget);

    target.children('.user-pop').removeClass('active');
}

function toggleFAQ(e){
    var target = $(e.currentTarget);
    var icon = target.find('i.fas');

    icon.toggleClass('fa-minus');
    icon.toggleClass('fa-plus');
}

// 주문 하나씩 펼치기
function clickJoinPrev(e){
    var target = $(e.currentTarget);
    var prev_target = target.closest('.fd-join-cont').prev('.fd-join-cont').find('.fd-join-con');
    
    $('.fd-join-con').slideUp();
    prev_target.slideDown();
}

function clickJoinNext(e){
    var target = $(e.currentTarget);
    var next_target = target.closest('.fd-join-cont').next('.fd-join-cont').find('.fd-join-con');

    $('.fd-join-con').slideUp();
    next_target.slideDown();
}

// 상품상세 리뷰 작성 이벤트
function clickReviewWrite(e){
    var target = $(e.currentTarget);

    $('.review-write-cont').slideToggle();
}

// 상품상세 리뷰
function showDetailReview(){
    var con = $('.fd-review-head').find('p:first-child');
  
    con.siblings('p').remove();
    con.append("<span class='fd-review-more'>more</span>");

}

// 헤더 shop 메뉴 펼치기 이벤트
function overShopMenu(){
    var menu = $('.fd-shop-menu');
    menu.slideDown();
}

function leaveShopMenu(){
    var menu = $('.fd-shop-menu');
    menu.slideUp();
}

// Q&A 비밀글 자동설정
/*function setSecretWrite(){
    var target = $('.fd-secret-cont');
    target = target.find('input#secure1');

    target.attr('checked', true);
    console.log(target);
}*/

// 인스타그램
function hoverInsta(e){
    var target = $(e.currentTarget);
    var test = target.find('iframe');
    
    console.log(test);
}

// 상세페이지 하단 안내정보
function clickDetailBotinfo(e){
    var target = $(e.currentTarget);

    target.find('.it-right').toggleClass('xi-minus');
    target.siblings('.bot-info-bot').slideToggle();
}

// 메인페이지 헤더 투명 이벤트
/*function scrollHeaderEvent(){

    if($('#section1.fd-main-sec01').hasClass('active'))
    {
        $('#top').addClass('active');
        console.log('1');
    }
    else
    {
        $('#top').removeClass('active');
        console.log('2');
    }
}*/

