$(document).ready(() => {

    const loader = $('#loader');

    $(document).on('showLoader', e => {
        console.log('show')
        loader.removeClass('hide');
    });
    $(document).on('hideLoader', e => {
        console.log('hide')
        loader.addClass('hide');
    });
});