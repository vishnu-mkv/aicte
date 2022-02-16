const createContent = (data) => {
        return  `
        <div class="news-container"> 
            <a class="headline" href=${data.url}>${data.headline}</a>
            <p class="content">${data.content}</p>
            <div class="news-bottom"> 
                <span class="date">${moment(data.date).format('MMMM Do, YYYY')}</span>
                <span class="dot">&bull;</span>
                <span class="source">${data.source}</span>
            </div>
            <div class="line"></div>
        </div>`;
    }

$(document).ready(function() {  
});