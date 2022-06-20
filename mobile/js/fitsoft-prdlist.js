$(function(){
    // 할인이 없을 때
    setNoneDiscount();
    setNoneDiscount2();
});

// 할인이 없을 때
function setNoneDiscount(){
    var target = $('li.fd-prd-list-item2');

    for(i=0; i<target.length; i++)
    {
        var info = target.eq(i).find('ul.xans-product-listitem li');
        if(info.length === 2)
        {
            target.eq(i).find('ul.xans-product-listitem li:nth-child(2)').find('span').css({'color':'#000', 'font-size':'20px', 'font-weight':'bold'});
        }
    }
}

// function setNoneDiscount2(){
//     var target = $('li.fitsoft-swipe');

//     for(i=0; i < target.length; i++)
//     {
//         var info = target.eq(i).find('.fd-prdlist-item3');

//         for(j=0; j < 2; j++)
//         {
//             var price = info.eq(j).find('.price.sale');

//             if(price.find('span').length === 0)
//             {
//                 var p_val = price.eq(j).siblings('span.price.normal');
                
//                 p_val.css({'color':'#000', 'font-size':'20px', 'font-weight':'bold'});
//             }
//         }
//     }
// }


function setNoneDiscount2(){
    var target = $('li.fitsoft-swipe');

    for(i=0; i < target.length; i++)
    {
        var info = target.eq(i).find('.fd-prdlist-item3');
        
        for(j=0; j < 2; j++)
        {
            var price = info.eq(j).find('ul.xans-product-listitem li');
            if(info.length === 2)
            {
                price.eq(j).find('ul.xans-product-listitem li:nth-child(2)').find('span').css({'color':'#000', 'font-size':'20px', 'font-weight':'bold'});
            }

            // if(price.find('span').length === 0)
            // {
            //     var p_val = price.eq(j).siblings('span.price.normal');
                
            //     p_val.css({'color':'#000', 'font-size':'20px', 'font-weight':'bold'});
            // }
        }
    }
}