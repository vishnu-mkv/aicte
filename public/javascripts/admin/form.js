const doc = $(document);

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

doc.ready(function() {

    $('.field-adder').on('click', (e) => {

        e.preventDefault();

        let parent = $(e.target).parent();
        let template = $(parent.find('.array-template')[0]).clone(true, true)[0];
        $(template).removeClass('array-template');

        parent.find('.array-fields')[0].append(template);

    });

    $('.deleter').on('click', e => {
        let parent = $(e.target).parent();
        parent.remove();
    });

    let form = $('#detailsContainer');

    const packData = () => {

        let data = {};

        form.find('input, textarea').each((index, input) => {
            
            input = $(input);

            let key = input.attr('name'), val = input.val().trim();
            
            if(input.hasClass('array-template')) return;

            var attr = input.attr('data-arrayparent');

            // For some browsers, `attr` is undefined; for others,
            // `attr` is false.  Check for both.
            if (typeof attr !== 'undefined' && attr !== false) {
                key = attr;
                if(!(key in data)) {
                    data[key] = [];
                }
                if(val == "" || val == undefined) return;
                data[key].push(val);
                return;
            }

            if(input.attr('type') === "datetime" || input.attr('type') === "datetime-local") {
                if(val !== undefined && val !== "") val = new Date(val).toISOString();
                else val = new Date().toISOString();
            }
            
            data[key] = val;
        });

        return data;
    }

    $('#save').on('click', e => {
        
        const data = packData();

        console.log(data);

        $.ajax({
            type: "POST",
            url: form.attr('data-api'),
            data: data,
            dataType: "json",
            success: function(data) {
                $('#success-msg').removeClass('hide-msg');
                setTimeout(function() {
                    window.location.replace("/admin/"+form.attr('data-modelid')+'/'+data.instance._id);
                }, 2000);
            },
            error: function(err) {
                $('#error-msg').removeClass('hide-msg');
                setTimeout(function() {
                    $('#error-msg').addClass('hide-msg');
                }, 2000);
            }
        });

    });

    $('textarea').each((i, textarea) => {
        auto_grow(textarea);
    })
});