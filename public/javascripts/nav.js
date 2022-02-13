$(document).ready(function () {

let currentOpenMenu = null;

// open/close extended menu
$('#extended-nav-cover').on('click', function(){
    $('#extended-nav').toggleClass('extended-nav-open');
    $('.fa-caret-down').toggleClass('rotate');
});


// open secondary menu
$('.nav-link-title').each(function() {
    
    let title = $(this);
    title.on('click', function(){
        // close if any open menus
        currentOpenMenu?.removeClass('slide-open');
        currentOpenMenu = title.parent().find('.slide-menu');
        currentOpenMenu.addClass('slide-open'); 
    });
});

// close secondary menu
$('.fa-arrow-left').each(function() {
    
    let back = $(this);
    back.on('click', function(){
        back.parent().parent().removeClass('slide-open');
    });
});

// change menu icon
let toggleIcons = () => {
    $('#menu-icon').toggleClass('hide');
    $('#close-icon').toggleClass('hide');
}

// open menu on mobile
$('#menu-icon').on('click', () => {
    $('.nav-right').addClass('menu-open');
    toggleIcons();
}) 

// close menu on mobile
$('#close-icon').on('click', () => {
    $('.nav-right').removeClass('menu-open');
    toggleIcons();
}) 
});