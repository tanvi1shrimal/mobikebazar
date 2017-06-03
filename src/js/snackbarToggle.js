//Snack bar button toggle
$(function(){
	$('.snaker-btn').on('click',function(){
		$('#snack-bar-content').addClass('show');
		 setTimeout(function(){ $('#snack-bar-content').removeClass('show'); }, 3000);
	});
});