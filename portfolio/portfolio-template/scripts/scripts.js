$(function() {
    var $mainNav = $(".nav-list");
    $(".hamburger-menu-icon").on("click", function() {
        $mainNav.slideToggle(250);
    });


    if (window.width() >= 640) {
        $mainNav.show();
    } else {
        $mainNav.hide();
    }

});