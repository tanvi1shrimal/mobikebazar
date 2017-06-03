$(document).ready(function(){
	$('.accessory-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,

		nextArrow:'<div class="slick-next accessories-next-prev accessories-next"></div>',
		prevArrow:'<div class="slick-prev accessories-next-prev accessories-prev"></div>',
		dots: false,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});
