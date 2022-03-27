const createContent = data => {
    return `
        <div class="media-container">
            <div class='media'>
                <iframe class="media-file" type="text/html"
                src="https://${data.video_url}?autoplay=0&showinfo=0&controls=0&origin=http://example.com"
                frameborder="0"></iframe>
            </div>
            <p>${data.title}</p>
        </div>
    `;
}