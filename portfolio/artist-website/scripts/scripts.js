$(".main-nav-small-screen-icon").click(function () {
    $(".small-screen-navigation-container").css({
        transform: "translateX(0px)",
    });
});

$(".close-small-screen-navigation").click(function () {
    $(".small-screen-navigation-container").css({
        transform: "translateX(-110vw)",
    });
});