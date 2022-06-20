var fitsoft_prdbox_view = false;
$(document).ready(function(){  
    // $("#prdbox .btnOpenClose").addClass('closed');
    $(window).scroll(function() {
        if($(this).scrollTop() > $("#detailbookmark").offset().top) {
            $("#prdbox").addClass("fixbox");
            $("#prdbox .btnOpenClose").show();
            //$("#prdbox .prdname").hide();
            //$("#prdbox #detailguide").hide();
            $("#prdbox").removeClass("nonefix");
            
        
            if (fitsoft_prdbox_view == false) {    
                if($("#prdbox").css("right") == 0 || $("#prdbox").css("right") == "-420px") {

            		$("#prdbox .btnOpenClose").addClass("closed");
                    $("#prdbox").css("right", "0");
                }
                fitsoft_prdbox_view = true;
            }
        }
        else {
            $("#prdbox").removeClass("fixbox");
            $("#prdbox .btnOpenClose").hide();
            $("#prdbox .prdname").show();
            $("#prdbox #detailguide").show();
            
            $("#prdbox").addClass("nonefix");
            
            fitsoft_prdbox_view = false;
        }
        
        if($("#prdbox").css("right") == 0 || $("#prdbox").css("right") == "0px") {
            $("#prdbox .close").hide();
            $("#prdbox .open").show();
        } else {
            $("#prdbox .open").hide();
            $("#prdbox .close").show();
        }
    });
    
    $("#prdbox .btnOpenClose").click(function() {
        if($(this).attr("class").indexOf("closed") > -1) {
            $(this).removeClass("closed");
            $("#prdbox .close").hide();
            $("#prdbox .open").show();
            $("#prdbox").animate({right: "-420px"}, 500);
        } else {
            $(this).addClass("closed");
            $("#prdbox .open").hide();
            $("#prdbox .close").show();
            $("#prdbox").animate({right: "0"}, 500);
        }
    });
});    