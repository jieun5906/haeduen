$(function(){
    // 상품네비게이션바
    $(window).scroll(scrollNavi);
    // 상품네비게이션바 클릭이벤트
    $('.scroll-navibtn').click(clickNavi);
    // 쇼핑가이드 클릭이벤트
    $('.fd-tit').click(clickGuide);
    // 공유하기 아이콘 이미지 변경
    changeShareIcon();
    // 공유하기 열기/닫기
    $('.fd-prdshare-btn').click(openPrdShare);
    $('.fs-close').click(closePrdShare);
});

function scrollNavi(){
    var st = $(document).scrollTop();

    if(st > 2800)
    {
        $('.prdd-navi-scroll').addClass('active');
        $('#fd-cate.cate-fix').addClass('prdscroll');
        $('#fd-header').addClass('prdscroll');
    }
    else if(st < 2799)
    {
        $('.prdd-navi-scroll').removeClass('active');
        $('#fd-cate.cate-fix').removeClass('prdscroll');
        $('#fd-header').removeClass('prdscroll');
    }
}

function clickNavi(e){
    var target = $(e.currentTarget);
    var pa = target.closest('.navi-item');

    $('.prdd-navi-scroll').find('.navi-item').removeClass('selected');
    pa.addClass('selected');
}

function clickGuide(e){
    var target = $(e.currentTarget);

    $('.fd-des').slideUp();
    target.siblings('.fd-des').slideDown();
}

function changeShareIcon(){
    $('.sns-facebook > img').attr('src', '/fd-co/img/share-fackbook.png');
    $('.sns-twitter > img').attr('src', '/fd-co/img/share-twitter.png');
}

function openPrdShare(){
    $('.fd-share').addClass('active');
}

function closePrdShare(){
    $('.fd-share').removeClass('active');
}
