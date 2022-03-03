$(document).ready(function () {

let currentOpenMenu = null;
let overlayId = 'overlay-menu', overlayOn = false;
let extendNav = $('#extended-nav'); 
let arrow = $('.fa-caret-down');

function closeExtendedNav() {
    extendNav.removeClass('extended-nav-open');
    arrow.removeClass('rotate');
    extendNav.attr('data-op', 'open');
}

// open/close extended menu
$('#extended-nav-cover').on('click', function(){
    
    let op = extendNav.attr('data-op');

    if(op === "open") {
        extendNav.addClass('extended-nav-open');
        arrow.addClass('rotate');
        openOverlay();
        extendNav.attr('data-op', 'close');
    }

    if(op === "close") {
        closeExtendedNav();
        closeOverlay();
    } 
});

function openOverlay() {
    if(overlayOn) return;
    $(document).trigger('open-overlay', [overlayId, closeMenu, null, 2]);
    overlayOn = true;
}

function closeOverlay() {
    if(!overlayOn) return;
    $(document).trigger('close-overlay', [overlayId]);
    overlayOn = false;
}

// open secondary menu
$('.nav-link-title').each(function() {
    let title = $(this);
    title.on('click', function(){
        // close if any open menus
        currentOpenMenu?.removeClass('slide-open');
        currentOpenMenu = title.parent().find('.slide-menu');
        currentOpenMenu.addClass('slide-open'); 
        openOverlay();
    });
});

// close secondary menu
$('.fa-arrow-left').each(function() {
    
    let back = $(this);
    back.on('click', function(){
        back.parent().parent().removeClass('slide-open');
        closeOverlay();
    });
});

// open menu on mobile
$('#menu-icon').on('click', () => {
    $('.nav-right').addClass('menu-open');
    $('#menu-icon').addClass('hide');
    $('#close-icon').removeClass('hide');
    openOverlay();
}) 

// close menu on mobile
$('#close-icon').on('click', () => closeMenu()); 

const closeMenu = () => {
    $('.nav-right').removeClass('menu-open');
    $('#menu-icon').removeClass('hide');
    $('#close-icon').addClass('hide');
    closeOverlay();
    currentOpenMenu?.removeClass('slide-open');
    closeExtendedNav();
}

// show time
setInterval(()=>{
    var today  = new Date();

    var shortOptions = {year: '2-digit', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    $('#date-time-short').text(today.toLocaleDateString("en-US", shortOptions));

    var longOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    $('#date-time-long').text(today.toLocaleDateString("en-US", longOptions));

}, 1000);

});

