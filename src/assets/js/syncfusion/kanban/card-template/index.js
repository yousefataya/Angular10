ej.base.enableRipple(window.ripple)

    var data = new ej.base.extend([], window.kanbanPizzaData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Category',
        columns: [
            { headerText: 'Menu', keyField: 'Menu' },
            { headerText: 'Order', keyField: 'Order' },
            { headerText: 'Ready to Serve', keyField: 'Ready to Serve' },
            { headerText: 'Delivery', keyField: 'Delivered,Served' }
        ],
        cardSettings: {
            contentField: 'Description',
            headerField: 'Id',
            template: '#cardTemplate'
        }
    });
    kanbanObj.appendTo('#Kanban');
