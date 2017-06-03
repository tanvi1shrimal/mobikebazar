var jQuery_1_7 = $.noConflict(true);
	jQuery_1_7(document).ready(function() {
	if(jQuery_1_7(window).width() <= 767) {
		jQuery_1_7('.zoom_image').each(function () {
			new RTP.PinchZoom(jQuery_1_7(this), {});
		});
	}
});
