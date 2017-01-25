$(document).ready(function() {
	$('.item .tab').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.menu .item').tab();
});
