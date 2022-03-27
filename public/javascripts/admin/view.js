let doc = $(document);

doc.ready(function() {

    $('.delete').on('click', (e) => {
        doc.trigger('open-popup', ['deleter-popup', getPopupContent]);
    });

    function getPopupContent() {
        let deleter = $('#popup-content-template').clone();

        deleter.find('#confirm-delete').on('click', function(e) {
            
            $.ajax({
                url: $('#delete-btn').attr('data-deleteapi'),
                type: 'DELETE',
                success: function(data) {
                    $('#success-msg').removeClass('hide-msg');
                    doc.trigger('close-popup', [$('#deleter-popup')]);
                    setTimeout(function() {
                        window.location.replace($('#delete-btn').attr('data-forward'));
                    }, 2000);
                },
                error: function(err) {
                    $('#error-msg').removeClass('hide-msg');
                    setTimeout(function() {
                        $('#error-msg').addClass('hide-msg');
                    }, 2000);
                }
            });

        });

        deleter.find('#cancel-delete').on('click', function(e) {
            doc.trigger('close-popup', [$('#deleter-popup')]);
        });

        return deleter;
    }
});