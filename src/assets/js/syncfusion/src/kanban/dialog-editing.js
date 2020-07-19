this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object.
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Testing', keyField: 'Testing' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardDoubleClick: onCardDoubleClick,
    });
    kanbanObj.appendTo('#Kanban');
    var dialogObj;
    var cardObj = {};
    var curData;
    var count = 31;
    var statusData = ['Open', 'InProgress', 'Testing', 'Close'];
    var assigneeData = ['Nancy Davloio', 'Andrew Fuller', 'Janet Leverling',
        'Steven walker', 'Robert King', 'Margaret hamilt', 'Michael Suyama'];
    var priorityData = ['Low', 'Normal', 'Critical', 'Release Breaker', 'High'];
    function onCardDoubleClick(args) {
        curData = args.data;
        renderDialog(curData, 'Edit');
    }
    function renderDialog(args, action) {
        dialogObj = new ej.popups.Dialog({
            buttons: getDialogButtons(action),
            content: getDialogContent(args, action),
            header: ((action === 'Add') ? 'Add' : action === 'Edit' ? 'Edit' : 'Delete') + ' Card Details',
            isModal: true,
            target: document.body,
            showCloseIcon: true,
            beforeOpen: action === 'Delete' ? null : onBeforeDialogOpen.bind(this),
            beforeClose: onBeforeDialogClose.bind(this),
            width: (action === 'Delete') ? 400 : 600
        });
        dialogObj.appendTo('#Dialog');
        if (action === 'Add') {
            dialogObj.element.querySelector('#Id').removeAttribute('disabled');
        }
    }
    function onBeforeDialogClose() {
        cardObj = {};
        var formInputs = getFormElements();
        for (var i = 0; i < formInputs.length; i++) {
            var input = formInputs[i];
            var columnName = input.name || getColumnName(input);
            if (!ej.base.isNullOrUndefined(columnName) && columnName !== '') {
                var value = getValueFromElement(input);
                cardObj[columnName] = value;
            }
        }
        dialogObj.destroy();
    }
    function onBeforeDialogOpen(args) {
        var numericObj = new ej.inputs.NumericTextBox({
            value: curData.Estimate, placeholder: 'Estimate', floatLabelType: 'Always'
        });
        numericObj.appendTo(args.container.querySelector('#Estimate'));
        var statusDropObj = new ej.dropdowns.DropDownList({
            value: curData.Status, popupHeight: '300px', floatLabelType: 'Always',
            dataSource: statusData, fields: { text: 'Status', value: 'Status' }, placeholder: 'Status'
        });
        statusDropObj.appendTo(args.container.querySelector('#Status'));
        var assigneeDropObj = new ej.dropdowns.DropDownList({
            value: curData.Assignee, popupHeight: '300px', floatLabelType: 'Always',
            dataSource: assigneeData, fields: { text: 'Assignee', value: 'Assignee' }, placeholder: 'Assignee'
        });
        assigneeDropObj.appendTo(args.container.querySelector('#Assignee'));
        var priorityObj = new ej.dropdowns.DropDownList({
            value: curData.Priority, popupHeight: '300px', floatLabelType: 'Always',
            dataSource: priorityData, fields: { text: 'Priority', value: 'Priority' }, placeholder: 'Priority'
        });
        priorityObj.appendTo(args.container.querySelector('#Priority'));
    }
    function getDialogButtons(action) {
        var primaryButtonClass = action === 'Delete' ? 'e-dialog-yes' : action === 'Add' ? 'e-dialog-add' : 'e-dialog-edit';
        var flatButtonClass = action === 'Delete' ? 'e-dialog-no' : 'e-dialog-cancel';
        var dialogButtons = [
            {
                buttonModel: {
                    cssClass: 'e-flat ' + primaryButtonClass, isPrimary: true,
                    content: action === 'Add' || action === 'Edit' ? 'Save' : 'Yes'
                },
                type: action === 'Add' || action === 'Edit' ? 'submit' : 'button',
                click: dialogButtonClick.bind(this)
            }, {
                buttonModel: {
                    cssClass: 'e-flat ' + flatButtonClass, isPrimary: false,
                    content: action === 'Add' || action === 'Edit' ? 'Cancel' : 'No'
                },
                click: dialogButtonClick.bind(this)
            }
        ];
        if (action === 'Edit') {
            var deleteButton = {
                buttonModel: { cssClass: 'e-flat e-dialog-delete', isPrimary: false, content: 'Delete' },
                click: dialogButtonClick.bind(this)
            };
            dialogButtons.splice(0, 0, deleteButton);
        }
        return dialogButtons;
    }
    function getDialogContent(args, action) {
        if (action === 'Delete') {
            return 'Are you sure you want to delete this card ?';
        }
        else {
            var ele = ej.base.createElement('div', { id: 'dialogContent' });
            document.querySelector('#container').appendChild(ele);
            ej.base.append(kanbanObj.templateParser('#dialogTemplate')(args), ele);
            return ele;
        }
    }
    function getFormElements() {
        var elements = [].slice.call(document.querySelectorAll('.e-field'));
        var validElements = [];
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element.classList.contains('e-control')) {
                validElements.push(element);
            }
            else if (element.querySelector('.e-control')) {
                validElements.push(element.querySelector('.e-control'));
            }
            else {
                validElements.push(element);
            }
        }
        return validElements;
    }
    function getColumnName(element) {
        var attrName = element.getAttribute('data-name') || '';
        if (attrName === '') {
            var isDropDowns = false;
            var fieldSelector = '';
            if (element.classList.contains('e-dropdownlist')) {
                fieldSelector = 'e-ddl';
                isDropDowns = true;
            }
            else if (element.classList.contains('e-numerictextbox')) {
                fieldSelector = 'e-numeric';
            }
            var classSelector = isDropDowns ? "." + fieldSelector + ":not(.e-control)" : "." + fieldSelector;
            var control = ej.base.closest(element, classSelector) || element.querySelector("." + fieldSelector);
            if (control) {
                var attrEle = control.querySelector('[name]');
                if (attrEle) {
                    attrName = attrEle.name;
                }
            }
        }
        return attrName;
    }
    function getValueFromElement(element) {
        var value;
        var instance = element.ej_instances;
        if (instance && instance.length > 0) {
            value = instance[0].value ||
                instance[0].checked;
        }
        else {
            value = element.value;
        }
        return value;
    }
    function dialogButtonClick(event) {
        var target = event.target.cloneNode(true);
        dialogObj.hide();
        var cardData = ej.base.extend({}, cardObj, null, true);
        if (target.classList.contains('e-dialog-add') || target.classList.contains('e-dialog-edit')) {
            if (target.classList.contains('e-dialog-add')) {
                kanbanObj.addCard(cardData);
                count++;
            }
            else {
                kanbanObj.updateCard(cardData);
            }
        }
        else if (target.classList.contains('e-dialog-yes')) {
            kanbanObj.deleteCard(curData.Id);
        }
        else if (target.classList.contains('e-dialog-no')) {
            renderDialog(curData, 'Edit');
        }
        else if (target.classList.contains('e-dialog-delete')) {
            renderDialog(null, 'Delete');
        }
    }
    document.getElementById('addNew').onclick = function (e) {
        curData = {
            Id: 'Task ' + count, Status: 'Open', Priority: '', Assignee: 'Andrew Fuller', Estimate: 0, Tags: '', Summary: ''
        };
        renderDialog(curData, 'Add');
    };
};