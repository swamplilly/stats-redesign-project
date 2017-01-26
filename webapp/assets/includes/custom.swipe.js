$(document).ready(function() {
	$('#qq').click(function() {
		$('#qq').transition({
			animation : 'fly right',
			duration : 500
		});

		setTimeout(function(){
			$('#ref').transition({
				animation : 'fly left',
				duration : 500
			});
		},500);
	});

	$('#ref').click(function() {
		$('#ref').transition({
			animation : 'fly left',
			duration : 500
		});

		setTimeout(function(){
			$('#qq').transition({
				animation : 'fly right',
				duration : 500
			});
		},500);
	});
});

