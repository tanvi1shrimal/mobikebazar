var active_tab;

$(document).click(function(){
	active_tab = $(".setup-content.active").attr("id");
	$(".bike-stepwizard__step[data-step-name="+active_tab+"]").addClass("current-step");
});

$(".bike-next").on("click", function(e){
	e.preventDefault();

	$(this).addClass('active');
	$(this).parent(".bike-brand__block").siblings('.bike-brand__block').find(".bike-next").removeClass('active');

	setTimeout(function(){
		$('[href="#step-2"]').tab('show');
		active_tab = $(".setup-content.active").attr("id");
		$(".bike-stepwizard__step[data-step-name="+active_tab+"]").addClass("current-step");
	},2000)
	

});

$(".bike-next-2").on("click", function(e){
	e.preventDefault();

	$(this).addClass('active');
	$(this).parent(".bike-brand__model").siblings('.bike-brand__model').find(".bike-next-2").removeClass('active')

	setTimeout(function(){
		$('[href="#step-3"]').tab('show');
		active_tab = $(".setup-content.active").attr("id");
		$(".bike-stepwizard__step[data-step-name="+active_tab+"]").addClass("current-step");
	},2000)
});

$(".bike-next-3").on("click", function(e){
	e.preventDefault();

	$(this).addClass('active');
	$(this).parent(".bike-brand__model").siblings('.bike-brand__model').find(".bike-next-3").removeClass('active')

	setTimeout(function(){
		$('[href="#step-4"]').tab('show');
		active_tab = $(".setup-content.active").attr("id");
		$(".bike-stepwizard__step[data-step-name="+active_tab+"]").addClass("current-step");
	},2000)
});
$(".bike-next-4").on("click", function(e){
	e.preventDefault();

	$(this).addClass('active');
	$(this).parent(".bike-brand__model").siblings('.bike-brand__model').find(".bike-next-4").removeClass('active')

	setTimeout(function(){
		$('[href="#step-5"]').tab('show');
		active_tab = $(".setup-content.active").attr("id");
		$(".bike-stepwizard__step[data-step-name="+active_tab+"]").addClass("current-step");
	},2000)
});