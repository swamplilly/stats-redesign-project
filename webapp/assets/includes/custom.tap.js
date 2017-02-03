/******************************************************************************
 *
 * DOCUMENT READY
 *
 *****************************************************************************/

$(document).ready(function() {
    $('#ref').click(showModal);

    $('.withCount').click(function() {
        incrementCount($(this));
    });

    $('.ui.inverted.segment').on('taphold', function() {
        editStatistics($(this));
    });
});

/******************************************************************************
 *
 * IMPLEMENTATIONS
 *
 *****************************************************************************/

function showModal() {
    $('#referral').modal('show');
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

function editStatistics(object) {
    // var title = "Directions";
    // var obj = $("div.ui.fluid.card.withCount:contains('"+title+"')").find("div.value");
    // alert(obj.text());

    /* Edit title of modal to match the tile being edited.
       Then, show the edited modal. */
    var title =
        $(object)
            .parent()
            .children('div.header')
            .text();
    $('#edit-title').text(title)
    $('#edit').modal('show');

    var countObject = $("div.ui.fluid.card.withCount:contains('"+title+"')").find("div.value");

    /* Get the <div class="value"> object of that tile. */
    // var countObject =
    //     $(object)
    //         .parent()
    //         .children('div.ui.inverted.segment.left.floated')
    //         .children('div.ui.tiny.inverted.statistics.left.floated')
    //         .children('div.statistic')
    //         .children('div.value');

    /* Wait for "Enter" to be pressed.
       Then update the corresponding tile statistic. */
    $('#edit').keypress(function(event) {
        var value = $('#new-count').val();
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            // if (value !== '') {
            //     countObject.text(value);
            // }
            // $('#edit').modal('hide');
            // countObject = null;

            // return;
            countObject.text(value);
            return false
        }
        event.off();
    });

    /* Clear input value. */
    $('#new-count').val('');

    return;
}