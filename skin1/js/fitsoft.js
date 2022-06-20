function gogoNew(no)
{
    window.open(gogo[no]);
}
function gogoSelf(no)
{
    location.href = gogo[no];
}


var IsSlidesScroll = false;
$(document).ready(function(){ 
    
    $( window ).scroll(function() {
      if($(window).scrollTop() == 0) {
         $( ".scrollTop" ).fadeOut();
      }
      else {
         $( ".scrollTop" ).fadeIn();
      }
        
    });
    
    $("#member_id, #member_passwd, #order_name, #order_id1, #order_id2, #order_password").live("focus",function() {
        $(this).css("background-image", "url('')");
    }); 
});


$(function() {
    $('#toparea, #bottomarea').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
});


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