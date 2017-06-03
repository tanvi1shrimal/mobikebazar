//To show other brands in pop up
function showOtherBrands() {
	$('.bike-brand__other-brands').on('touchstart click',function(){
		$('.bike-brand__wrap--other-brands').slideDown('slow');
	});
}