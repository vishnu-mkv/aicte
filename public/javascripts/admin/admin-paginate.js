var createContent;

function prePopulate() {
    return `<tr class="table-header data-container">
        <th>Record </th>
        <th>Date</th>
        <th class="t-right">Actions</th>
    </tr>`
}

$(document).ready(function() {

    createContent = (data) => {
        let cc = $('#content-container');
        let headlineAttr = cc.attr('data-headline');
        let dateAttr = cc.attr('data-date');
        let headline = data[headlineAttr].length < 60 ? data[headlineAttr] : data[headlineAttr].substring(0, 60) + '...';
        return `
        <tr class="data-container"> 
            <td><a class="headline" href="${cc.attr('data-modelid')}/${data._id}">${headline}</a></td>
            <td class="date">${moment(data[dateAttr]).format('MMMM Do, YYYY')}</td>
            <td class="t-right"><a class="a-edit" href="${cc.attr('data-modelid')}/${data._id}/edit">
                <img src="/images/edit.svg" />
       </tr>`;
    }
});