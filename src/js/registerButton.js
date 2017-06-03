//For the next button in Register page
$('.next-btn').click(function() {
    var $this = $(this),
    curActiveInfo = $('.register-info--register-account').find('.is-active');
    $('.register-info--register-account.is-active').removeClass('is-active').next().addClass('is-active');
});