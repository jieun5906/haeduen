$(function(){
    // 판매가 할인 체크
    // checkPrice();
    checkURL();
    // 검색창 기간/범위
    selectSearch();
});

// 판매가 할인 체크
function checkPrice(){
    var item = $('div[rel="판매가"]');

    var check = item.find('#span_product_tax_type_text').attr('style');
    if(check == 'text-decoration:line-through;')
    {
        item.find('span:nth-child(2)').addClass('prd-discount');
    }
}

function checkURL(){
    var url = $(location).attr('search');
    console.log(url);
    if(url === '?category_no=1')
    {
        $('.faq02').addClass('active');
    }
    else if(url === '?category_no=2')
    {
        $('.faq03').addClass('active');
    }
    else if(url === '?category_no=3')
    {
        $('.faq04').addClass('active');
    }
    else if(url === '?category_no=4')
    {
        $('.faq05').addClass('active');
    }
    else if(url === '')
    {
        $('.faq01').addClass('active');
    }
}


function selectSearch(){
    var date = $(".fd-ser-form select#search_date");
    var key = $(".fd-ser-form select#search_key");

    date.find('option:last-child').attr('selected', 'selected');
    key.find('option:nth-child(2)').attr('selected', 'selected');
}