$(function(){
    $(".info_toggle .tit").click(function(){
        var info_display = $(this).next(".cont").css("display");
        if(info_display == "none"){
            $(".info_toggle .cont").slideUp();
            $(this).next(".cont").slideDown();
        } else {
            $(this).next(".cont").slideUp();
        }
    });
});

// 상품 상세 탭메뉴
$(document).ready(function(){
    $("#goodsInfo").show();
	$(".tab__btn button").click(function(){
    var idx = $(this).index();
		$(".tab__btn button").removeClass("on");
        $(".tab__btn button").eq(idx).addClass("on");
        $(".tab__detail > div").hide();
        $(".tab__detail > div").eq(idx).show();
    })
});
