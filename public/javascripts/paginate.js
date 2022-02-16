// there should be a function createContent() that can be accessed 
// from this file to create elements
// that will be inserted into contentContainer
// createContent() should return html as string

$(document).ready(function() {

// there should be a #content-container
const contentContainer = $('#content-container');
const paginator = $('#paginator');
const pageNumbersContainer = paginator.find('#paginate-numbers');
const next = paginator.find('#next');
const prev = paginator.find('#prev');
// pass api as data-api attribute
const apiURL = paginator.data('api');

const removeClass = (element, selector) => {
    if(element.hasClass(selector)) element.removeClass(selector);
} 

const getPageNumbers = (current, limit, total) => {

    let pageNumbers = []

    let i = 1;
    let lastPage = Math.ceil(total / limit);
    for (; i <= Math.min(lastPage, 3); i++) {
        pageNumbers.push(i);
    }

    if (i+2 < current) pageNumbers.push(-1);

    i = Math.max(i, current-2);
    for (; i <= current+2 && i <= lastPage; i++) {
        pageNumbers.push(i);
    }

    if (i < lastPage-2) pageNumbers.push(-1);

    i = Math.max(i, lastPage-2);
    for (; i <= lastPage; i++) {
        pageNumbers.push(i);
    }

    return pageNumbers;
}

const getContent = (data) => {
    var template = document.createElement('template');
    // Never return a text node of whitespace as the result
    template.innerHTML = createContent(data).trim();
    return template.content.firstChild;
}

const processData = data => {

    // add docs to container
    for(let doc of data.docs) {
        contentContainer.append(getContent(doc));
    }

    // toggle next prev buttons
    if(data.hasNextPage) {
        removeClass(next, 'hide');
        next.data('page', data.nextPage);   
    }
    else next.addClass('hide');

    if(data.hasPrevPage) {
        removeClass(prev, 'hide');
        prev.data('page', data.prevPage);
    }
    else prev.addClass('hide');

    // clear and add page numbers
    for(let number of getPageNumbers(data.page, data.limit, data.totalDocs)) {
        
        let pageTag = $(document.createElement('p'));
        pageTag.text(number);
        pageNumbersContainer.append(pageTag);
        
        if(number === -1) {
            pageTag.text('...').addClass('no-pointer');
            continue;
        }

        if(number === data.page) {
            pageTag.addClass('active');
        }

        pageTag.data('page', number).on('click', e => {
            loadOnClick($(e.target));
        });
    } 

    $(document).trigger('hideLoader');
}

const loadOnClick = (button) => {
    document.getElementById("scroll-here").scrollIntoView();
    getPage(button.data('page'));
};

const getPage = (pageNumber) => {
    if(!pageNumber || pageNumber < 0) return;

    contentContainer.empty();
    pageNumbersContainer.empty();
    $(document).trigger('showLoader');

    $.ajax({
        url: apiURL+`?page=${pageNumber}`,
        success: processData
    });
}   

next.on('click', _ => loadOnClick(next));
prev.on('click', _ => loadOnClick(prev));
getPage(1);
});