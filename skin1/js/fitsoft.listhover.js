$(document).ready(function () {
    $(".prdpadding2").mouseover(
        function() {
            $(this).find(".mainbnhover").show();
        }
    ).mouseout(
        function() {
            $(this).find(".mainbnhover").hide();
        }
    );
});

$(function(){
    // 메인화면 탭상품
    var mySwiper1 = new Swiper ('#section1 .swiper-container', {
        loop:true,
        slidesPerView: 1,
        speed:2500,
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 5000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: {
            nextEl: '#section1 .swiper-button-next',
            prevEl: '#section1 .swiper-button-prev',
        },
        pagination: {
            el: '#section1 .swiper-pagination',
            type: 'bullets',
        },
    });    
});