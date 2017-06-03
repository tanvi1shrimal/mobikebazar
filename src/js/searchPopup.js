searchPopup();
// For Search Module popup
function searchPopup() {
	$('.search-box__input, .search-wrapper').on("touchstart click", function(e){
		$('#search-overlay').find('.search-overlay-parent').addClass('active');
		if($('.search-overlay-parent').hasClass('active')) {
			$('.search-overlay-parent').addClass('active');
			$('.search-initiator-container').addClass('active').removeClass('remove');
		}
		else {
			$('.search-overlay-parent').removeClass('active')
			$('.search-initiator-container').removeClass('active');
		}

	});

	$('.search-initiator-container .search-close').on("touchstart click", function(e){
		$(this).parent('.search-initiator-container').removeClass('active').addClass('remove');
		$(this).parents('.search-overlay-parent').removeClass('active');
	});
}