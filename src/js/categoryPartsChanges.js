//For category parts changes
$('[data-point]').on('touchstart click', function(){
	var value1 = $(this).attr('data-point');
	$('.spare-block__item').removeClass('active');
	$('.spare-block__item[data-list='+value1+']').addClass('active');

	// Scroll to the top
	var container = $('.category-scrollbox'),
    scrollTo = $('.spare-block__item.active');

    container.animate({
	    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
	}, 'slow');

    if($(window).width() < 768) {
		var container = $('.spare-block'),
		    scrollTo = $('.spare-block__item.active');
		    container.animate({scrollLeft: scrollTo.offset().left - container.offset().left + 
                       container.scrollLeft()}, 'slow');
    }
});