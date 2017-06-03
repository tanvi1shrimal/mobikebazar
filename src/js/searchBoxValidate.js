// For searchbox validation
function searchBoxValidationFields() {
	$('.searchbar-container input[type="text"]').on('change keyup paste', function() {
	    textName = $(this).val();
	    var retextName = /^[a-zA-Z ]{2,30}$/;
	    if (retextName.test(textName)) {

	      $(this).parent().next('.search-initiator-btn').removeClass('disabled').addClass('enabled');
	      $(this).parent().next('.search-initiator-btn').attr('disabled', false);
	    } else {
	      $(this).parent().next('.search-initiator-btn').addClass('disabled').removeClass('enabled');
	      $(this).parent().next('.search-initiator-btn').attr('disabled', true);
	    }
  	});
}