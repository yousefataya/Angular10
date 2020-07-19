ej.base.enableRipple(window.ripple)

    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        }
    });
    kanbanObj.appendTo('#Kanban');
    var addIndex = new ej.inputs.NumericTextBox({
        format: '###.##',
        min: 0
    });
    addIndex.appendTo('#index');
    var deleteIndex = new ej.inputs.NumericTextBox({
        format: '###.##',
        min: 0
    });
    deleteIndex.appendTo('#deteteIndex');
    var statusData = ['Testing', 'Review', 'Validate'];
    var keyObj = new ej.dropdowns.DropDownList({
        width: '100%',
        dataSource: statusData,
        fields: { text: 'Status', value: 'Status' },
        placeholder: 'Key Field'
    });
    keyObj.appendTo('#key');
    var addFormObj = new ej.inputs.FormValidator('#addForm');
    var deleteFormObj = new ej.inputs.FormValidator('#deleteForm');
    document.getElementById('add').onclick = function () {
        var key = document.getElementById('key').value;
        var text = document.getElementById('text').value;
        var index = parseInt(document.getElementById('index').value, 10);
        if (kanbanObj.columns.length >= index) {
            kanbanObj.addColumn({ keyField: key, headerText: text }, index);
            addFormObj.reset();
        }
        else if (text === '') {
            alert('Enter column header text');
        }
        else if (key === '') {
            alert('Enter column keyField');
        }
        else if (kanbanObj.columns.length <= index) {
            alert('Provide valid column Index');
        }
        else if (!index) {
            alert('Enter column Index');
        }
    };
    document.getElementById('delete').onclick = function () {
        var index = parseInt(document.getElementById('deteteIndex').value, 10);
        if (kanbanObj.columns.length > 1) {
            if (kanbanObj.columns.length >= (index + 1)) {
                kanbanObj.deleteColumn(index);
                deleteFormObj.reset();
            }
            else {
                alert('Provide valid column Index');
            }
        }
        else {
            alert('Atleast one column must be displayed in kanban');
        }
    };
    document.getElementById('addForm').addEventListener('submit', function (e) {
        e.preventDefault();
    });
    document.getElementById('deleteForm').addEventListener('submit', function (e) {
        e.preventDefault();
    });
