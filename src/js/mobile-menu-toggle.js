//Mobile menu toggle
$(document).ready(function() {
	$('.menu-icon').on('touchstart', function(){
		$('.sub-nav').addClass('is-active');
		$('.overlay').addClass('is-active');
	});
	$('.sub-nav__close').on('touchstart', function(){
		$('.sub-nav').removeClass('is-active');
		$('.overlay').removeClass('is-active');
	});
	$('.dot').tooltip();
	$('header .overlay').on("touchstart", function(e) {
		if (!$('.sub-nav').is(e.target) && $('.sub-nav').has(e.target).length === 0) {
			$('.sub-nav').removeClass('is-active');
		  	$('.overlay').removeClass('is-active');
		} 
	});
});

