$(document).ready(function(){

	if (window.matchMedia("(max-width: 767px)").matches) {
	    $(".has-dropdown").on('touchstart click', function(){
			$(this).siblings(".dropdown").addClass("active");
			if($(this).siblings(".dropdown").hasClass("active")) {
				$(this).addClass('active');
				$(this).parent(".nav-dropdown__item").siblings('.nav-dropdown__item').find(".has-dropdown").removeClass('active');
				$(this).parent(".secondary-nav__item").siblings('.secondary-nav__item').find(".has-dropdown").removeClass('active');
			}
		});
		$(".go-back").on('touchstart click',function(e){
			e.preventDefault();
			$(this).parent(".dropdown").removeClass("active");
			$(this).siblings("li").find(".dropdown").removeClass("active");
		});
	} 

	else {

		$(".secondary-nav__item").each(function() {
			$(".secondary-nav__item").find('.has-dropdown').mouseover(function(){

				$(this).closest(".secondary-nav__item").siblings('.secondary-nav__item').find(".dropdown").removeClass('active');
				$(this).parent(".secondary-nav__item").siblings('.secondary-nav__item').find(".has-dropdown").removeClass('active');
				$(this).closest('.dropdown').find('.dropdown').removeClass('active');
				$(this).parent(".nav-dropdown__item").siblings('.nav-dropdown__item').find(".has-dropdown").removeClass('active');
				$(this).closest(".secondary-nav__item").siblings('.secondary-nav__item').find('.nav-dropdown__watermark').removeClass('active');
				
				if (!$(this).next(".dropdown").hasClass("active")) {
					$(this).next(".dropdown").addClass("active");
					$(this).addClass('active');	
					$(this).parent('.secondary-nav__item').find('.nav-dropdown__watermark').addClass('active');
				}
			});
		});

		$('.secondary-nav__item').mouseleave(function() {
			$(this).find('.active').removeClass('active');
			$(this).find('.dropdown').removeAttr("style")
			$(this).find('.nav-dropdown__watermark').removeClass('active');
			$(this).find('.watermark-image').removeAttr("style")
		});
	}
});

if (window.matchMedia("(min-width: 768px)").matches) {
	$(".secondary-nav__item").each(function() {
		$(".secondary-nav__item").find('.nav-dropdown1 .has-dropdown').mouseover(function(){
			$('.watermark-image').css({ left: '' });
			if (!$(this).closest('.nav-dropdown2').hasClass("active")) {
				$(this).addClass('active');
				$(this).closest('.secondary-nav__item').find('.watermark-image').css({
					left: '9%',
					opacity: 1
				});
			}			
		});

		$(".secondary-nav__item").find('.nav-dropdown2 .has-dropdown').mouseover(function(){
			if (!$(this).next(".dropdown").hasClass("active")) {
				$(this).addClass('active');
				console.log('yes');
				$(this).closest('.secondary-nav__item').find('.watermark-image').css({
					left: '9%',
					opacity: '0'
				});
			}			
		});
	});
}