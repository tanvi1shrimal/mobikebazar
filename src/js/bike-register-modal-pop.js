//Bike regsiter modal
$(function(){
	$('.bike-register__link').on('click',function(){
		$('#register-bike').modal('hide');

	});

	$('#register-bike-popup').on('shown.bs.modal', function (e) {
	  	//$("body").addClass('is-overflow');
	  	e.preventDefault();
	});

	$('#register-bike-popup').on('hidden.bs.modal', function (e) {
	  	$("body").css("padding-right","0");
	  	e.preventDefault();
	});


	$('.proceed-btn').on('click',function(){
		$('#register-bike-popup').modal('hide');

	});
	
	
});