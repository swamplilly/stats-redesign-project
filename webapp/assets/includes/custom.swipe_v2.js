$(document).ready(function() {
	$('#qq').on("swipeleft",function() {
		$('#qq').transition({
			animation : 'fly right',
			duration : 500
		});

		setTimeout(function(){
			$('#ref').transition({
				animation : 'fly left',
				duration : 500
			});
		},150);

		$('#qqtab').removeClass('active');
		$('#reftab').addClass('active');
	});

	$('#ref').on("swiperight",function() {
		$('#ref').transition({
			animation : 'fly left',
			duration : 500
		});

		setTimeout(function(){
			$('#qq').transition({
				animation : 'fly right',
				duration : 500
			});
		},150);

		$('#reftab').removeClass('active');
		$('#qqtab').addClass('active');
	});
});

