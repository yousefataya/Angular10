ej.base.enableRipple(window.ripple)
var dataManger = new ej.data.DataManager({
    url: 'https://js.syncfusion.com/ejServices/wcf/Northwind.svc/Tasks',
    crossDomain: true
});

    var kanbanObj = new ej.kanban.Kanban({
        dataSource: dataManger,
        keyField: 'Status',
        allowDragAndDrop: false,
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Testing', keyField: 'Testing' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
    });
    kanbanObj.appendTo('#Kanban');
