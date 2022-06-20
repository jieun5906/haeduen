$(function(){
    // 비회원 form placeholder
    setLogin();
});

// 비회원 form placeholder
function setLogin(){
    var form1 = $('.lcr-name').find('input[type="text"]');
    var form2 = $('.lcr-number').find('#order_id');
    var form3 = $('.lcr-pw').find('input[type="password"]');

    form1.attr('placeholder', '주문자명');
    form2.attr('placeholder', '주문번호');
    form2.attr('title', '주문번호');
    form3.attr('placeholder', '주문 비밀번호');

    console.log(form2.attr('title'));
}