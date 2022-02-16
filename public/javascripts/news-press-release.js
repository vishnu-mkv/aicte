const createContent = (data) => {
        return  `
        <div class="news-container"> 
            <a class="headline" href=${data.url}>${data.content}</a>
            <div class="news-bottom">
                <span class="date">${moment(data.date).format('MMMM Do, YYYY')}</span>
            </div>
            <div class="line"></div>
        </div>`;
    }

$(document).ready(function() {

    

});