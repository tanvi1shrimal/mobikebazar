//Toggle seller
$(function(){
	$('.seller-info__link').on('click',function(){
		$('.other-sellers').slideDown(300);
	});
	$('.close-icon-cont').on('click',function(){
		$('.other-sellers').slideUp(300);
	});
});
