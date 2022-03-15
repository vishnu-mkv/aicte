const doc = $(document);

const createContent = data => {
    return `
        <div class="media-container">
            <div class='media'>
                <img class='media-file front' src=${data.cover}>
                <img class='media-file back-1' src=${data.images[0]}>
                <img class='media-file back-2' src=${data.images[1]}>
            </div>
            <p>${data.name}</p>
            <div class="media-bottom">
                <div class="left">
                    <img src="/images/images.svg" class="i-1">
                    <span>${data.images.length} images</span>
                </div>
                <span>${moment(data.date).format('DD-MM-YYYY')}</span>
            </div>
        </div>
    `;
}

    
doc.ready(() => {

    let data = null;
    let index = 0;
    let image, desc, imageLoader;

    function setImage(album) {
        image = album.find('#current-image');
        desc = album.find('.album-bottom');
        imageLoader = album.find('#loader-image');
    }

    function setImageState(i) {
        if(i < 0 || i >= data.images.length) return;
        index = i;

        doc.trigger('showLoader', [imageLoader]);
        image.attr('src', data.images[index]);
        image.on('load', e => {
            console.log(e);
            doc.trigger('hideLoader', [imageLoader]);
        })
        
        desc.text(`${index+1} of ${data.images.length} images`);
    }

    const getPopupContent = () => {
        
        let album = $('#popup-content-template').clone();

        setImage(album);
        setImageState(0);

        album.find('.album-title').text(data.name);
        
        album.find('#prev-image').on('click', _ => {
            setImageState(index-1);
        });
        
        album.find('#next-image').on('click', _ => {
            setImageState(index+1);
        });

        return album;
    }

    $('#content-container').on('content-clicked', (e, d) => {
        data = d;
        doc.trigger('open-popup', ['image-viewer-popup', getPopupContent]);
    });
    
});

