window.botpressWebChat.init({ host: 'https://aicte-bot.live', botId: 'aictebot' })

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

    let light = $('#light'), dark = $('#dark');

    light.on('click', (e) => {
        switchToLight();
    });

    dark.on('click', (e) => {
        switchToDark();
    });

    function switchToDark(setState) {
        light.removeClass('hide');
        dark.addClass('hide');
        $(document.body).addClass('dark');
        if(setState === false) return; 
        localStorage.setItem('dark', 'true');
    }

    function switchToLight(setState) {
        dark.removeClass('hide');
        light.addClass('hide');
        $(document.body).removeClass('dark');
        if(setState === false) return; 
        localStorage.setItem('dark', 'false');
    }

    if (localStorage.getItem("dark") === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        switchToDark(false);
    }

    if(localStorage.getItem('dark') === 'true') switchToDark();
    else switchToLight();


});

