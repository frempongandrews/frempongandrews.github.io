
//opening menu on small screens
$(".hamburger").on("click", function () {
    $(".main-menu-small").css({
        transform: "translateX(0)",
    });
});

//closing menu on small screens

$(".close-menu").on("click", function () {
    $(".main-menu-small").css({
        transform: "translateX(-100vw)"
    });
});