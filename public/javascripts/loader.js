$(document).ready(() => {

    $(document).on('showLoader', (e, loader) => {
        console.log("Showing", loader);
        loader.removeClass('hide');
    });
    
    $(document).on('hideLoader', (e, loader) => {
        console.log("hiding", loader);
        loader.addClass('hide');
    });
});