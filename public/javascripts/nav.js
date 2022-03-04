$(document).ready(function () {

    let currentOpenMenu = null;
    let primaryNav = $('#primary-nav');
    let menuIcon = $('#menu-icon');
    let closeIcon = $('#close-icon');
    
    menuIcon.on('click', () => {
        closeIcon.removeClass('hide');
        menuIcon.addClass('hide');
        primaryNav.addClass('nav-active');
        document.body.style.position = 'fixed';
    });
    
    closeIcon.on('click', () => {
        closeIcon.addClass('hide');
        menuIcon.removeClass('hide');
        primaryNav.removeClass('nav-active');
        document.body.style.position = '';
    });

    $('.menu-head').on('click', (e) => {

        let oldMenu = currentOpenMenu;
        
        if($(e.target).parent().hasClass('submenu-container')){
            currentOpenMenu = $(e.target).parent();
        }else currentOpenMenu = $(e.target).parent().parent();
        
        if(currentOpenMenu.hasClass('submenu-active')) {
            currentOpenMenu?.removeClass('submenu-active');
            document.body.style.position = '';
            return;
        }

        oldMenu?.removeClass('submenu-active');
        currentOpenMenu?.addClass('submenu-active');
        document.body.style.position = 'fixed';
    });

    $('.nav-back').on('click', () => {
        currentOpenMenu.removeClass('submenu-active');
        currentOpenMenu = null;
    })

});

