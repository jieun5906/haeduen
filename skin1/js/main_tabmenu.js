/*$(function(){
    // 메인화면 탭상품
    var mySwiper1 = new Swiper ('#section4 .saleItem .swiper-container', {
        loop:true,
        spaceBetween: 5,
        observer: true, 
        observeParents: true,
        slidesPerView: 4,
        navigation: {
            nextEl: '#section4 .saleItem .swiper-button-next',
            prevEl: '#section4 .saleItem .swiper-button-prev',
        },
    });
    // 메인화면 탭상품
    var mySwiper2 = new Swiper ('#section4 .bestItem .swiper-container', {
        loop:true,
        spaceBetween: 5,
        observer: true, 
        observeParents: true,
        slidesPerView: 4,
        navigation: {
            nextEl: '#section4 .bestItem .swiper-button-next',
            prevEl: '#section4 .bestItem .swiper-button-prev',
        },
    });
    
    $(".main_tab_banner .tab li").click(function(){
        var $tabNum = $(this).index()+1;
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        $(".main_tab_banner div[class^=tabView]").hide();
        $(".main_tab_banner .tabView"+$tabNum).show();
    });
    
    // best number
    $(".prd_week_best ul li").each(function(){
        var $bestNum = $(this).index()+1;
        $(this).find(".best_number").text($bestNum);
    });   
});


window.addEventListener('load', function(){
	saleItemTab();
});


function saleItemTab() {
    var saleItem = document.querySelector('.saleItem');
    if(!saleItem) return;
    var tabButtonList = saleItem.querySelectorAll('.menu > li > .button');

    tabButtonList.forEach(function(button) {
        button.addEventListener('click', handleClickButton);
        setTitle(button);
    });

    function handleClickButton(e) {
        var currentButton = e.target;
        tabButtonList.forEach(function(button) {
            button.classList.remove('active');
        });
        currentButton.classList.add('active');

        var contentId = currentButton.getAttribute('data-id');
        var currentContent = saleItem.querySelector('#' + contentId);
        var tabContentList = saleItem.querySelectorAll('.tabContent');
        tabContentList.forEach(function(content) {
            content.classList.remove('active');
        });
        currentContent.classList.add('active');
    }

    function setTitle(button) {
        var contentId = button.getAttribute('data-id');
        var targetContent = saleItem.querySelector('#' + contentId);
        var mainTitle = targetContent.querySelector('.mainTitle');
        var title = '';
        if (mainTitle) {
            title = mainTitle.textContent;
        }
        button.innerText = title;
    }
}

function bestItemTab() {
    var bestItem = document.querySelector('.bestItem');
    if(!bestItem) return;
    var tabButtonList = bestItem.querySelectorAll('.menu > li > .button');

    tabButtonList.forEach(function(button) {
        button.addEventListener('click', handleClickButton);
        setTitle(button);
    });

    function handleClickButton(e) {
        var currentButton = e.target;
        tabButtonList.forEach(function(button) {
            button.classList.remove('active');
        });
        currentButton.classList.add('active');

        var contentId = currentButton.getAttribute('data-id');
        var currentContent = bestItem.querySelector('#' + contentId);
        var tabContentList = bestItem.querySelectorAll('.tabContent');
        tabContentList.forEach(function(content) {
            content.classList.remove('active');
        });
        currentContent.classList.add('active');
    }

    function setTitle(button) {
        var contentId = button.getAttribute('data-id');
        var targetContent = bestItem.querySelector('#' + contentId);
        var mainTitle = targetContent.querySelector('.mainTitle');
        var title = '';
        if (mainTitle) {
            title = mainTitle.textContent;
        }
        button.innerText = title;
    }
}*/


// if($(".saleItem .menu > li > .button").hasClass("active") === true) {
//     $(this).parents.addClass("active");
//     console.log(this);
// }