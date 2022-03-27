// popup
// import popup.css, popup.js 
//  dependancy overlay.js
// import overlay.js, overlay.css
// 'open-popup' event to open popup - parameters id, getPopupContent()
// 'close-popup' event to close popup
// 'getPopupContent()' method - return value should be HTML element to be inserted in popup


const getPopup = (getPopupContent) => {
    // convert html string to elements
    var template = document.createElement('template');
    template.innerHTML = `
        <div class="popup">
            <img src="/images/close-icon.svg" id="close-popup" class="i-1">
            <div class="popup-content"></div>
        </div>
    `.trim();
    let popup = $(template.content.firstChild);

    // insert in popup
    popup.find('.popup-content').append(getPopupContent());
    return popup;
}

doc.ready(() => {

    // store popups - id: popup
    let popups = {};

    const getOverlayId = (id) => 'overlay-'+id;

    const closePopup = (popup) => {

        // check if popup exists
        let id = popup.attr('id');
        if(!popups[id]) return;

        // close overlay and remove popup
        doc.trigger('close-overlay', [getOverlayId(id)]);
        popup.remove();
    }

    doc.on('open-popup', (e, id, getPopupContent) => {
        
        let overlayId = getOverlayId(id);        

        // create popup and set ID
        let popup = $(getPopup(getPopupContent)).attr('id', id);
        // set 'data-popupid' to popup ID
        popup.find('#close-popup').attr('data-popupid', id);

        // store in popups
        popups[id] = popup;

        // listen for click on close icon
        doc.on('click', '#close-popup', (e) => {
            // close the popup
            // to pass popup get id from 'data-popupid'
            doc.trigger('close-popup', [$('#'+$(e.target).attr('data-popupid'))]);
        });

        // open overlay - overlay ID, close(), popup
        doc.trigger('open-overlay', [overlayId, closePopup, popup]);

        // append popup to body
        $('body').append(popup);
    });

    // call closePopup() on 'close-popup' event
    doc.on('close-popup', (e, popup) => closePopup(popup));
});