
//opening menu on small screens
$(".hamburger").on("click", function () {
    $(".main-menu-small").removeClass("close").addClass("open");
});

//closing menu on small screens

$(".close-menu").on("click", function () {
    $(".main-menu-small").removeClass("open").addClass("close");
});


