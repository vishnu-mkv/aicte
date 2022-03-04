// there should be a function createContent() that can be accessed 
// from this file to create elements
// that will be inserted into contentContainer
// createContent() should return html as string

// listen for content-clicked event when clicked on content

$(document).ready(function() {

// there should be a #content-container
const contentContainer = $('#content-container');
const paginator = $('#paginator');
const pageNumbersContainer = paginator.find('#paginate-numbers');
const next = paginator.find('#next');
const prev = paginator.find('#prev');

// pass api as data-api attribute
const apiURL = paginator.data('api');
const pageLoader = $('#loader-paginate')

let currentData = [];

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
    template.innerHTML = createContent(data).trim();
    return template.content.firstChild;
}

const processData = data => {

    currentData = data;

    // add docs to container
    for(let [index, doc] of data.docs.entries()) {
        let content = $(getContent(doc));
        content.attr('data-index', index);

        //on click fire content-clicked event
        content.on('click', {currentData}, e => {
            contentContainer.trigger('content-clicked', [e.data.currentData.docs[$(e.currentTarget).data('index')]]);
        });
        contentContainer.append(content);
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

    console.log(pageLoader);
    $(document).trigger('hideLoader', [pageLoader]);
}

const loadOnClick = (button) => {
    document.getElementById("scroll-here").scrollIntoView();
    getPage(button.data('page'));
};

const getPage = (pageNumber) => {
    if(!pageNumber || pageNumber < 0) return;

    contentContainer.empty();
    pageNumbersContainer.empty();

    $(document).trigger('showLoader', [pageLoader]);

    $.ajax({
        url: apiURL+`?page=${pageNumber}`,
        success: processData
    });
}   

next.on('click', _ => loadOnClick(next));
prev.on('click', _ => loadOnClick(prev));

getPage(1);
});