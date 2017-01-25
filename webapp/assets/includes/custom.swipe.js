$(document).ready(function() {
	$('body').click(function() {
		// $('#ref').toggleClass('hidden');
		$('#ref').transition({
			animation : 'fade left',
			duration : 1000,
			interval : 200
		});
		// $('#qq').toggleClass('hidden');
		$('#qq').transition({
			animation : 'fade right',
			duration : 1000
		});
	});
});
