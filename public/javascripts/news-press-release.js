const createContent = (data) => {
    return  `
    <div class="news-container"> 
        <div class="news-bottom">
            <img class="calender i-1" src="/images/calender.svg">
            <span class="date">${moment(data.date).format('MMMM Do, YYYY')}</span>
        </div>
        <a class="headline" href=${data.url}>${data.content}</a>
    </div>`;
}

$(document).ready(function() {
});