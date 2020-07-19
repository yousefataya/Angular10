/**
 * Remote Data Binding sample.
 */
this.default = function () {

    //Initialize Query to select required columns with defined record count.
    var query = new ej.data.Query().select([
        'OrderID', 'CustomerID', 'ShipName', 'ShipCity', 'ShipCountry', 'Freight'
    ]).take(200);

    //Initialize DataManager.
    var data = new ej.data.DataManager({
        url: 'https://js.syncfusion.com/demos/ejServices//wcf/Northwind.svc/Orders',
        crossDomain: true
    });

    //Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: [
            {
                name: 'Shipment Details',
                rows: [{
                    cells: [{ value: 'Order ID' }, { value: 'Customer Name' }, { value: 'Freight' }, { value: 'Ship Name' },
                    { value: 'Ship City' }, { value: 'Ship Country' }]
                }],
                rangeSettings: [{ dataSource: data, query: query, showFieldAsHeader: false, startCell: 'A2' }],
                columns: [{ width: 100 }, { width: 130 }, { width: 100 }, { width: 220 }, { width: 150 }, { width: 180 }]
            }],
        openUrl: 'http://localhost:62728/api/spreadsheet/open',
        saveUrl: 'http://localhost:62728/api/spreadsheet/save',
        dataBound: function () {
            if (!spreadsheet.isOpen && spreadsheet.activeSheetTab === 1) {
                spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:G1');
            }
        }
    });

    //Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');
};