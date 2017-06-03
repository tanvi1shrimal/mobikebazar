//For payment option tabs
function paymentOptionsTabs() {
	$('.payment-options-tabs__list .payment-options-tabs__link').on('click',function(){
		$('.payment-options-content').addClass('is-active');
		$('.tab-content>#credit-card-options').addClass('active');
		$('.payments-options-container').addClass('is-active');	
	});
	$('.cheque-details-form .control--radio').on('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	});
}
paymentOptionsTabs();