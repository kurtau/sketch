$(document).ready(function() {

	// makes grid squares
	var blocks = 32;
	for (var i = 0; i < blocks; i++) {
		var square = "<div class='square'></div>";
		for (var j = 1; j < blocks; j++) {
			$("#container").append(square);
		};
		$("#container").append(square);
	};

	// changes background color when hovering
	$(".square").hover(function() {
		$(this).css({"background-color": "#E8866C"});
	});

	//
	$("#reset").click(function() {
		$(".square").css({"background-color" : "#494546"})
	});

});