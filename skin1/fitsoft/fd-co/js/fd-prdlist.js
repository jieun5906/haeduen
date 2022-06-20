$(function(){
    //카테고리 선택
    checkCategory();
});

function checkCategory(){
    var list = $('.prdlist-cate > .menuCategory');
    var item = list.find('li');

    if(item.hasClass('selected'))
    {
        return;
    }
    else
    {
        $('.prdlist-allcate').addClass('selected');
        console.log('선택안됨');
    }
}