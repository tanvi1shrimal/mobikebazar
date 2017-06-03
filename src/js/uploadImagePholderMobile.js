//Upload Image textarea Placeholder in Mobile
	if($(window).width() < 768) {
		$('#uploadImagesListingPopup').find("textarea.form-group__control--textarea1").each(function(ev)
		  	{
		      	if(!$(this).val()) {
		     	$(this).attr("placeholder", "Add Description");
		  	}
		});
	}