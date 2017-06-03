//Filter options
$(function() {
	$('.fliter-size').on('click',function(){
		$(this).parents('.filter-popup-list__item').next().addClass('active');
		$(this).parents('.filter-popup-list__item').next().children('.popup-list').slideDown(300).addClass('active');
	})
});



$(document).ready(function() {
    function filterToggleButton() {
        $('.filter-button').click(function(){
            $(this).toggleClass('active');
            
            if($(this).hasClass('active')) {
                $('.filter-button').addClass('active')
                $('.filter-popup-list').slideDown(300);
            }
            else {
                $('.filter-button').removeClass('active')
                $('.filter-popup-list').slideUp(600);
            }
        });
    }


    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 767) {
            filterToggleButton();
        }
        else if (windowSize >= 768 && windowSize <= 991) {
            $('.filter-tablet').on('click',function(){        
		        $(this).next('.filter-list').addClass("active");
		        $(this).next('.filter-list').find('.filter-popup-list').css("display","block");
		    });

		    $('.filter-button').click(function(){
		    	$(this).parents('.filter-list').removeClass('active');
		    })
        }
        else if (windowSize >= 992) {
            filterToggleButton();
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
})