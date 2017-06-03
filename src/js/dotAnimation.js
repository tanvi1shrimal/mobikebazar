//Dot animations
$(document).ready(function(){
	$('.dot').addClass('has-animation');
	$('.dot').on('click',function(){
		$(this).addClass('visited');
	});
});

