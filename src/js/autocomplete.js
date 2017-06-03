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