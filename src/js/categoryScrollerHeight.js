//for scroller height wrt to window height
function categoryScrollerHeight() {
	if($(window).width() >= 768) {
		var windowHt = $(window).height();
		var headerHt = $('header.navbar').height() + $('.breadcrumb').height() + 135;
		var contentHeight = windowHt - headerHt;
		$('.category-scrollbox').height(contentHeight);
	}
}

categoryScrollerHeight();