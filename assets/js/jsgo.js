$(document).scroll(function(){
    $(".text-move").css("opacity", 1 - $(window).scrollTop() / 600);
});