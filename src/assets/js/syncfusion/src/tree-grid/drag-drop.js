this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.dragData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        height: '400',
        allowRowDragAndDrop: true,
        selectionSettings: { type: 'Multiple' },
        columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 70, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
            { field: 'priority', headerText: 'Priority', width: 90 }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
};