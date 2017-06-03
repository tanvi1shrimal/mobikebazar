//Function: Recovery password modal
function recoverPasswordScreen() {
	$('.recover-pw-link').on('touchstart click',function(){
		$('.recover-pw-wrapper').addClass('is-active');
	});
	$('.login-go-back').on('touchstart click',function(){
		$('.recover-pw-wrapper').removeClass('is-active');
	});
}
recoverPasswordScreen();