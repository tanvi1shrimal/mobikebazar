//Function: Registration page: Horizontal wizard
$(document).ready(function() {
	var windowWidth = $(window).width();
	$('.progress-top-bar .checkpoint-wraper').css({
		width: windowWidth
	});	

});


$('[data-form]').on('touchstart click', function(){
	var value1 = $(this).attr('data-form');
	$('.checkpoint-wraper').removeClass('active');
	$('.checkpoint-wraper[data-list='+value1+']').addClass('active');

    if($(window).width() < 768) {
		var container = $('.progress-bars'),
		    scrollTo = $('.progress-bars > .checkpoint-wraper.active'),
		    windowWidth = $(window).width() / 2;
		    scrollTo.addClass('current-checkpoint');
		   
		    container.animate({scrollLeft: scrollTo.offset().left - container.offset().left +
                       container.scrollLeft()}, 'slow');

    }
});