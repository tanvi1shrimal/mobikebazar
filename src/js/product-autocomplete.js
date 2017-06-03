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