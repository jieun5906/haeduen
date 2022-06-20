
$(document).ready(function(){

    //initialising fullpage.js in the jQuery way
    $('#fullpage').fullpage({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff'],
        navigation: true,
        slidesNavigation: true,
        anchors: ['#01', '#02', '#03', '#04'],
        normalScrollElements: '#aside'
    });

    // calling fullpage.js methods using jQuery
    $('#moveSectionUp').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    });

    $('#moveSectionDown').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });
});