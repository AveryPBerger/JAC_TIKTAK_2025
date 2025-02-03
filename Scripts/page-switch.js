let rightArrowIsShown = true;

$(".arrow").on("click", () => {
    if (rightArrowIsShown) {
        $("#leftPage").hide();
        $("#rightPage").show();
    }
    else {
        $("#leftPage").show();
        $("#rightPage").hide();
    }

    $(".arrow").eq(rightArrowIsShown ? 1 : 0).hide();
    $(".arrow").eq(rightArrowIsShown ? 0 : 1).show();

    rightArrowIsShown = !rightArrowIsShown
});

$(window).resize(() => {
    if($(window).width() > 1050){
        $('#leftPage, #rightPage, .arrow').removeAttr('style');
        rightArrowIsShown = true;
    }
})