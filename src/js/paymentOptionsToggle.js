//Function to open and close payment options
function closePaymentOptions() {
	$('.close-icon').on('touchstart click',function(){
		$('.payment-options-content').removeClass('is-active');
		$('.payments-options-container').removeClass('is-active');	
	});
}
closePaymentOptions();