$(function() {
    $(window).scroll(function() {
    $("nav.floating").stop().animate(
    {"top": $(window).scrollTop() + 100},
    500);
    });
});