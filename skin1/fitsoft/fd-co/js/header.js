$(function(){
    // 스크롤 했을 때 헤더 고정
    $(window).scroll(scrollHeader);
    // 스크롤 했을 때 카테고리 고정
    $(window).scroll(scrollCate);
    // 검색창 클릭 이벤트
    $('.ht-search-btn').click(clickSearch);
    $('.hts-close').click(clickSearch);
    // 전체 카테고리 이벤트
    $('.fd-cateall').click(clickCateAll);
});

// 스크롤 했을 때 헤더 고정
function scrollHeader(){
    var st = $(this).scrollTop();
    if(st > 50)
    {
        $('.hd-top').addClass('hd-fix');
        $('.hd-bot').addClass('active');
    }
    else
    {
        $('.hd-bot').removeClass('active');
        $('.hd-top').removeClass('hd-fix');
    }
}


// 스크롤 했을 때 카데고리 고정
function scrollCate(){
    var st = $(this).scrollTop();
    if(st > 50)
    {
        $('#fd-cate').addClass('cate-fix');
    }
    else
    {
        $('#fd-cate').removeClass('cate-fix');
    }
}

// 검색창 클릭 이벤트
function clickSearch(){
    var box = $('.ht-search');

    box.toggleClass('active');
    box.find('input#keyword').attr('placeholder', '검색어를 입력하세요');
}

// 전체 카테고리 이벤트
function clickCateAll(){
    var icon = $('.fd-cateall').find('i.xi-bars');
    var cateall = $('.cateall');

    cateall.toggleClass('active');
    icon.toggleClass('xi-close');
}