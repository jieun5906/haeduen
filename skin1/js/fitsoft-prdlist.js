$(function(){
    // 할인이 없을 때
    setNoneDiscount();
});

// 할인이 없을 때
function setNoneDiscount(){
    var target = $('li.item.xans-record-');

    for(i=0; i<target.length; i++)
    {
        var info = target.eq(i).find('ul.spec li');
        if(info.length === 2)
        {
            target.eq(i).find('ul.spec li:nth-child(2)').find('span').css({'color':'#000', 'font-size':'20px', 'font-weight':'bold'});
        }
    }
}