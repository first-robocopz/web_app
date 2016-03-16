$(document).ready(function() {
	$(document).scroll(function () {
		var scroll = $(this).scrollTop();
		var topDist = $("#nav-container").position();
		if (scroll > topDist.top) {
			$("#navigation").css({"position":"fixed","top":"0"});
		} else {
			$("#navigation").css({"position":"static","top":"auto"});
		}
	});
});
