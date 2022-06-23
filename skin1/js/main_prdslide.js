$(function(){
    // 메인화면 탭상품
    var mySwiper1 = new Swiper ('.recommendContent .swiper-container', {
        loop:true,
        spaceBetween: 5,
        observer: true, 
        observeParents: true,
        slidesPerView: 4,
        navigation: {
            nextEl: '.recommendContent .swiper-button-next',
            prevEl: '.recommendContent .swiper-button-prev',
        },
    });   
});
