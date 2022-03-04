const createContent = (data) => {
    return `
    <div class="news-container"> 
        <div class="news-bottom"> 
            <div class="line"></div>
            <span class="date">${moment(data.date).format('MMMM Do, YYYY')}</span>
            <span class="dot">&bull;</span>
            <span class="source">${data.source}</span>
        </div>
        <a class="headline" href=${data.url}>${data.headline}</a>
        <p class="content">${data.content.indexOf(".") !== -1 ? data.content.substring(0, data.content.indexOf(".")+1) : data.content}</p>
    </div>`;
}

$(document).ready(function() {  
});