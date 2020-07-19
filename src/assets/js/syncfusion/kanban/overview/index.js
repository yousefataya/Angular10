ej.base.enableRipple(window.ripple)
window.getTags = function (data) {
    var tagDiv = '<div class="e-tags">';
    var tags = data.Tags.split(',');
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        tagDiv = tagDiv.concat('<div class="e-tag e-tooltip-text">' + tag + '</div>');
    }
    return tagDiv.concat('</div>');
};


    var data = ej.base.extend([], window.cardData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        enableTooltip: true,
        columns: [
            { headerText: 'To Do', keyField: 'Open', template: '#headerTemplate', allowToggle: true },
            { headerText: 'In Progress', keyField: 'InProgress', template: '#headerTemplate', allowToggle: true },
            { headerText: 'In Review', keyField: 'Review', template: '#headerTemplate', allowToggle: true },
            { headerText: 'Done', keyField: 'Close', template: '#headerTemplate', allowToggle: true }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
            template: '#cardTemplate',
            selectionType: 'Multiple'
        },
        swimlaneSettings: {
            keyField: 'Assignee',
        }
    });
    kanbanObj.appendTo('#Kanban');
