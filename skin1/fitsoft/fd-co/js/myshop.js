$(function(){
    // 메인화면 회원정보 input 비활성화
    disableIndexInfo();
});

// 메인화면 회원정보 input 비활성화
function disableIndexInfo(){
    var cont = $('.msr-uir');
    cont.find('input[type="text"]').attr('readonly',true);
    cont.find('input[type="password"]').attr('readonly',true);
    cont.find('select').attr('readonly',true);
}