$(document).ready(function() {
	searchPopup();
	searchBoxValidationFields();
	hasAvailabilityInputBoxField();
	toggleButton();
	categoryScrollerHeight();
	recoverPasswordScreen();
	closePaymentOptions();
	paymentOptionsTabs();
	showOtherBrands();
	

	
	//Upload Image textarea Placeholder in Mobile
	if($(window).width() < 768) {
		$('#uploadImagesListingPopup').find("textarea.form-group__control--textarea1").each(function(ev)
		  	{
		      	if(!$(this).val()) {
		     	$(this).attr("placeholder", "Add Description");
		  	}
		});
	}

	// Select2 Single
	 $(".single-select2").select2();
	 $(".select-quant, .single-quant").select2({
	 	minimumResultsForSearch: Infinity
	 });

	// Text input effects //
	(function() {
		// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
			// in case the input is already filled..
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input--filled' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		});

		function onInputFocus(ev) {
			classie.add( ev.target.parentNode, 'input--filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--filled' );
			}
		}
	})();

});

//Onscroll add class on header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var headerHt = $('header').height();

    if(scroll >= headerHt) {
        $(".navbar--noborder").addClass("navbar--shadow");
    } else {
        $(".navbar--noborder").removeClass("navbar--shadow");
    }
});


// location redirect to categorylisting
if($(window).width() < 768) {
	function categoryListing(){
		window.location.href = "category-listing.html";
	}
}




//For zoomer image
if($(window).width() > 768) {
	$(function(){
		$('#zoom_image').finezoom();
	},200);
}
	




// For perfect scrollbar
$('.category-scrollbox').perfectScrollbar();
$('.bike-scrollbox').perfectScrollbar();
$('.order-tabs-list').perfectScrollbar({suppressScrollY : true});
$('.secondary-nav__list').perfectScrollbar({suppressScrollY : true});
$('.progress-bar--top').perfectScrollbar();
$('.bike-brand-otherbrands').perfectScrollbar();
$('#ui-id-1').perfectScrollbar();

//for scroller height wrt to window height
function categoryScrollerHeight() {
	if($(window).width() >= 768) {
		var windowHt = $(window).height();
		var headerHt = $('header.navbar').height() + $('.breadcrumb').height() + 135;
		var contentHeight = windowHt - headerHt;
		$('.category-scrollbox').height(contentHeight);
	}
}


//For category parts changes
$('[data-point]').on('touchstart click', function(){
	var value1 = $(this).attr('data-point');
	$('.spare-block__item').removeClass('active');
	$('.spare-block__item[data-list='+value1+']').addClass('active');

	// Scroll to the top
	var container = $('.category-scrollbox'),
    scrollTo = $('.spare-block__item.active');

    container.animate({
	    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
	}, 'slow');

    if($(window).width() < 768) {
		var container = $('.spare-block'),
		    scrollTo = $('.spare-block__item.active');
		    container.animate({scrollLeft: scrollTo.offset().left - container.offset().left + 
                       container.scrollLeft()}, 'slow');
    }
});


/*Add toggle action*/
function toggleButton() {
    $(document).on('touchstart click', '[data-button="toggle"]', function() {
        var findText = $(this).find('span').text(),
            altText = $(this).attr('data-alt');

        $(this).toggleClass('active');
        $(this).find('i').toggleClass('active');
        $(this).find('span').text(altText);
        $(this).attr('data-alt', findText);
        $(this).parents('.spare-block__item').toggleClass('active');
    });
}


// For Search Module popup
function searchPopup() {
	$('.search-box__input, .search-wrapper').on("touchstart click", function(e){
		$('#search-overlay').find('.search-overlay-parent').addClass('active');
		if($('.search-overlay-parent').hasClass('active')) {
			$('.search-overlay-parent').addClass('active');
			$('.search-initiator-container').addClass('active').removeClass('remove');
		}
		else {
			$('.search-overlay-parent').removeClass('active')
			$('.search-initiator-container').removeClass('active');
		}

	});

	$('.search-initiator-container .search-close').on("touchstart click", function(e){
		$(this).parent('.search-initiator-container').removeClass('active').addClass('remove');
		$(this).parents('.search-overlay-parent').removeClass('active');
	});
}


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


// For modal-open class for larger screen
$(document).on('hidden.bs.modal', function (event) {
  if ($('.modal:visible').length) {
    $('body').addClass('modal-open');
  }
});


// For modal-boday scrollbar
if($(window).width() < 768) {
	function setModalMaxHeight(element) {
	    this.$element = $(element);
	    this.$content = this.$element.find('.modal-content');
	    var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();
	    var dialogMargin = $(window).width() < 768 ? 20 : 60;
	    var contentHeight = $(window).height() - (dialogMargin + borderWidth);
	    var headerHeight = this.$element.find('.modal-header').outerHeight() || 0;
	    var footerHeight = this.$element.find('.modal-footer').outerHeight() || 0;
	    var maxHeight = contentHeight - (headerHeight + footerHeight);
	    this.$content.css({ 'overflow': 'hidden' });
	    this.$element.find('.modal-body').css({
	        'max-height': maxHeight,
	        'overflow-y': 'auto'
	    });
	    this.$element.find('.modal-body').addClass('modal-scrollbar');
	}
	$('.modal').on('show.bs.modal', function () {
	    $(this).show();
	    setModalMaxHeight(this);
	    // $('.modal-scrollbar').perfectScrollbar();
	});
	$(window).resize(function () {
	    if ($('.modal.in').length == 1) {
	        setModalMaxHeight($('.modal.in'));
	    }
	});
}


//Function: Recovery password modal
function recoverPasswordScreen() {
	$('.recover-pw-link').on('touchstart click',function(){
		$('.recover-pw-wrapper').addClass('is-active');
	});
	$('.login-go-back').on('touchstart click',function(){
		$('.recover-pw-wrapper').removeClass('is-active');
	});
}


//Function to open and close payment options
function closePaymentOptions() {
	$('.close-icon').on('touchstart click',function(){
		$('.payment-options-content').removeClass('is-active');
		$('.payments-options-container').removeClass('is-active');	
	});
}


//For payment option tabs
function paymentOptionsTabs() {
	$('.payment-options-tabs__list .payment-options-tabs__link').on('click',function(){
		$('.payment-options-content').addClass('is-active');
		$('.tab-content>#credit-card-options').addClass('active');
		$('.payments-options-container').addClass('is-active');	
	});
	$('.cheque-details-form .control--radio').on('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	});
}

//To show other brands in pop up
function showOtherBrands() {
	$('.bike-brand__other-brands').on('touchstart click',function(){
		$('.bike-brand__wrap--other-brands').slideDown('slow');
	});
}

$('.next-btn').click(function() {
    var $this = $(this),
    curActiveInfo = $('.register-info--register-account').find('.is-active');
    $('.register-info--register-account.is-active').removeClass('is-active').next().addClass('is-active');
});

$(function() {
	var availableTags = [
		"CT22122Q0",
		"DQ122Q0",
		"CMW2122Q0",
		"MT2212DS",
		"ZY22122Q0",
		"PGCT22122Q0"
	];
	$("#inputSuccess1").autocomplete({
		source: availableTags
	});
} );


$(function() {
	var availableTags = [
		"Bajaj Cylinder ",
		"Bajaj Piston",
		"Hero headlamp",
		"Scooty pep",
		"Bajaj scooty",
		"Yamaha piston",
	];
	$("#searchProducts").autocomplete({
		source: availableTags
	});
});

$(function(){
	$('.snaker-btn').on('click',function(){
		$('#snack-bar-content').addClass('show');
		 setTimeout(function(){ $('#snack-bar-content').removeClass('show'); }, 3000);
	});
});

$(document).ready(function(){
	$('.dot').addClass('has-animation');
});


$(function(){
	$('.seller-info__link').on('click',function(){
		$('.other-sellers').slideDown(300);
	});
	$('.close-icon-cont').on('click',function(){
		$('.other-sellers').slideUp(300);
	});
});


$(function() {
	$('#filter-btn').click(function(){
   		$('.filter-popup-list').slideDown(300);
	});

	$('.fliter-size').on('click',function(){
		$(this).parents('.filter-popup-list__item').next().addClass('active');
		$(this).parents('.filter-popup-list__item').next().children('.popup-list').slideDown(300).addClass('active');

	});
	
});



$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus();
});
