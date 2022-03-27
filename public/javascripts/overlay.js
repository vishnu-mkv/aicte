// overlay
// import overlay.js
// 'open-overlay' event - to open overlay
// params: id, close(source) to be called onclick overlay, source to be passed into close function, z-index for overlay
// 'close-overlay' event - to close overlay
// params: id 

$(document).ready(function() {

    var overlays = {};
    const scrollbarWidth = getScrollbarWidth();

    const paddingSelectors = ['nav', '#status-bar', '#main-content', 'footer'];

    // add padding to stop elements from moving right when scroll bar disappears
    function addPadding() {
        // check if body is overflowing
        // to add padding only if scrollbar is present
        // if(!$('body').hasScrollBar()) return;

        for (const selector of paddingSelectors) {
            $(selector).css('paddingRight', `+=${scrollbarWidth}`); 
        }
    }

    function removePadding() {

        // if(!$('body').hasScrollBar()) return;

        for (const selector of paddingSelectors) {
            $(selector).css('paddingRight', `-=${scrollbarWidth}`);      
        }
    }

    // event data needs - id and close function
    $(document).on('open-overlay', (e, id, close, parent, zIndex=50) => {

        // create overlay and insert
        let overlay = $(document.createElement('div'));
        overlay.css('z-index', zIndex);
        overlay.addClass('overlay').attr('id', id);

        // add click event listener and emit close event
        $(document).on('click', 'div.overlay', e => {
            $(document).trigger('close-overlay', [$(e.target).attr('id'), true]);
        });

        // add to overlays object
        overlays[id] = {element: overlay, close, parent};
        $('body').append(overlay);

        // add padding to body to stop screen adjust on scroll bar disappearing
        addPadding();     
        
        // stop body scrolling
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
    });

    $(document).on('close-overlay', (e, id, fromOverlay=false) => {

        if(overlays[id] === undefined) return;

        let overlay = overlays[id];
        // delete overlay from overlays
        delete overlays[id];
        
        // close the owner of overlay, remove overlay
        // call close only if click on overlay caused close-overlay event
        // to prevent infinite stack calls
        if(fromOverlay) overlay.close(overlay.parent);
        overlay.element.remove();

        // allow body scrolling
        // restore scroll position
        // remove padding
        removePadding();
        
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

    function getScrollbarWidth() {

        // Creating invisible container
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll'; // forcing scrollbar to appear
        outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        document.body.appendChild(outer);

        // Creating inner element and placing it in the container
        const inner = document.createElement('div');
        outer.appendChild(inner);

        // Calculating difference between container's full width and the child width
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);

        return scrollbarWidth;
    }

    (function($) {
        $.fn.hasScrollBar = function() {
            return this.get(0).scrollHeight > this.height();
        }
    })(jQuery);
});