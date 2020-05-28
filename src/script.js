const Portfolio = function() {
	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: ["complex problems.", "your problems!"],
			typeSpeed: 30,
			backSpeed: 50,
			backDelay: 1000
		});
	}

	return {
		typeAnimation: typeAnimation
	}

}();

Portfolio.typeAnimation();
