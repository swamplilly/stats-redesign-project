/******************************************************************************
 *
 * DOCUMENT READY
 *
 *****************************************************************************/

$(document).ready(function() {
	$('#qq').on("swipeleft",swipeLeft);
	$('#ref').on("swiperight",swipeRight);

	$('.withCount').click(function() {
        incrementCount($(this));
    });

    $('#directions').on('taphold', editDirections);
    $('#lookup').on('taphold', editLookup);
    $('#policy').on('taphold', editPolicy);
    $('#research').on('taphold', editResearch);
    $('#technical').on('taphold', editTechnical);
});

/******************************************************************************
 *
 * IMPLEMENTATIONS
 *
 *****************************************************************************/

function swipeLeft() {
	$('#qq').transition({
			animation : 'fly right',
			duration : 500
		});

		setTimeout(function(){
			$('#ref').transition({
				animation : 'fly left',
				duration : 500
			});
		},0);

		$('#qqtab').removeClass('active');
		$('#reftab').addClass('active');
}

function swipeRight() {
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
}

function incrementCount(object) {
    /* Get the <div class="value"> object of that tile. */
    var countObject =
        $(object)
            .children('div.content')
            .children('div.ui.inverted.segment.left.floated')
            .children('div.ui.tiny.inverted.statistics.left.floated')
            .children('div.statistic')
            .children('div.value');

    /* Update the count in integer form. */
    var count = parseInt(countObject.text());
    count++;

    /* Update the tile with new count. */
    countObject.text(String(count));
}

function editDirections() {
    /* Gather relevant elements. */
    var object =
        $('#directions')
            .children('div.ui.tiny.inverted.statistics.left.floated')
            .children('div.statistic')
            .children('div.value');
    var current_value = parseInt(object.text());
    var object_count = $('#new-directions-count');
    var object_modal = $('#directions-modal');

    /* Show modal with current count as default. */
    object_count.val(current_value);
    object_modal.modal('show');

    /* Update count on 'Enter', and hide modal. */
    object_modal.keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var new_value = parseInt(object_count.val());
            object.text(new_value);
            object_modal.modal('hide');
        }
        event.stopImmediatePropagation();
    });
}

function editLookup() {
    /* Gather relevant elements. */
    var object =
        $('#lookup')
            .children('div.ui.tiny.inverted.statistics.left.floated')
            .children('div.statistic')
            .children('div.value');
    var current_value = parseInt(object.text());
    var object_count = $('#new-lookup-count');
    var object_modal = $('#lookup-modal');

    /* Show modal with current count as default. */
    object_count.val(current_value);
    object_modal.modal('show');

    /* Update count on 'Enter', and hide modal. */
    object_modal.keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var new_value = parseInt(object_count.val());
            object.text(new_value);
            object_modal.modal('hide');
        }
        event.stopImmediatePropagation();
    });
}

function editPolicy() {
    /* Gather relevant elements. */
    var object =
        $('#policy')
            .children('div.ui.tiny.inverted.statistics.left.floated')
            .children('div.statistic')
            .children('div.value');
    var current_value = parseInt(object.text());
    var object_count = $('#new-policy-count');
    var object_modal = $('#policy-modal');

    /* Show modal with current count as default. */
    object_count.val(current_value);
    object_modal.modal('show');

    /* Update count on 'Enter', and hide modal. */
    object_modal.keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var new_value = parseInt(object_count.val());
            object.text(new_value);
            object_modal.modal('hide');
        }
        event.stopImmediatePropagation();
    });
}

function editResearch() {
    /* Gather relevant elements. */
    var object =
        $('#research')
            .children('div.ui.tiny.inverted.statistics.left.floated')
            .children('div.statistic')
            .children('div.value');
    var current_value = parseInt(object.text());
    var object_count = $('#new-research-count');
    var object_modal = $('#research-modal');

    /* Show modal with current count as default. */
    object_count.val(current_value);
    object_modal.modal('show');

    /* Update count on 'Enter', and hide modal. */
    object_modal.keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var new_value = parseInt(object_count.val());
            object.text(new_value);
            object_modal.modal('hide');
        }
        event.stopImmediatePropagation();
    });
}

function editTechnical() {
    /* Gather relevant elements. */
    var object =
        $('#technical')
            .children('div.ui.tiny.inverted.statistics.left.floated')
            .children('div.statistic')
            .children('div.value');
    var current_value = parseInt(object.text());
    var object_count = $('#new-technical-count');
    var object_modal = $('#technical-modal');

    /* Show modal with current count as default. */
    object_count.val(current_value);
    object_modal.modal('show');

    /* Update count on 'Enter', and hide modal. */
    object_modal.keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var new_value = parseInt(object_count.val());
            object.text(new_value);
            object_modal.modal('hide');
        }
        event.stopImmediatePropagation();
    });
}