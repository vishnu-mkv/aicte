$(document).ready(() => {

    $(document).on('showLoader', (e, loader) => {
        loader.removeClass('hide');
    });
    
    $(document).on('hideLoader', (e, loader) => {
        loader.addClass('hide');
    });
});