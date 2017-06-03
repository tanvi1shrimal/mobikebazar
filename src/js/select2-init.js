$(document).ready(function(){
	// Select2 Single
	$(".single-select2").select2();
	$(".select-quant, .single-quant").select2({
		minimumResultsForSearch: Infinity
	});
});