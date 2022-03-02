let doc = $(document);

doc.ready(() => {

    let carousel = $('#home-carousel');
    let slideContainer = carousel.find('#slide-container');
    let prevSlide = carousel.find('#prev-slide'), nextSlide = carousel.find('#next-slide');
    let slideButtons = carousel.find('.slide-button');
    let count = slideButtons.length;
    let currentSlideIndex = 0;
    let currentActiveButton = $('#active-slide');
    let slide = true;

    function moveTo(index, fromClick=true) {

        if(fromClick && slide) {
            slide = false;
            clearInterval(slideTimer);
        }

        index = (count + index) % count;

        currentSlideIndex = index;
        currentActiveButton.attr('id', '');
        currentActiveButton = $(slideButtons[index])
        currentActiveButton.attr('id', 'active-slide');
        slideContainer.animate({scrollLeft :`${currentSlideIndex*slideContainer.width()}`}, 300);
    }

    slideButtons.on('click', (e) => {
        moveTo($(e.target).data('slideid'));
    });

    prevSlide.on('click', () => moveTo(currentSlideIndex-1));
    nextSlide.on('click', () => moveTo(currentSlideIndex+1));

    let slideTimer = setInterval(() => {
        moveTo(currentSlideIndex+1, false);
    }, 5000);
});