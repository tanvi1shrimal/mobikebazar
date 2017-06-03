// For inputbox Has Availabilty
function hasAvailabilityInputBoxField() {
	$('#inputSuccess1').on('change keyup paste', function() {
	    textName = $(this).val();
	    var retextName = /^[a-zA-Z ]{2,30}$/;
	    if (retextName.test(textName)) {
	      $(this).parent('.form-group').addClass('has-available');
	    } else {
	      $(this).parent('.form-group').removeClass('has-available');
	    }
  	});
}
hasAvailabilityInputBoxField();