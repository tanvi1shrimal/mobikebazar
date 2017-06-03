/*Add toggle action*/
function toggleButton() {
    $(document).on('touchstart click', '[data-button="toggle"]', function() {
        var findText = $(this).find('span').text(),
            altText = $(this).attr('data-alt');

        $(this).toggleClass('active');
        $(this).find('i').toggleClass('active');
        $(this).find('span').text(altText);
        $(this).attr('data-alt', findText);
        $(this).parents('.spare-block__item').toggleClass('active');
    });
}
toggleButton();
