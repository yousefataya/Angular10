ej.base.enableRipple(window.ripple)
/**
 * Default Spreadsheet sample.
 */

    //Initialize Spreadsheet component.
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: [
            {
                name: 'Car Sales Report',
                rangeSettings: [{ dataSource: defaultData }],
                rows: [
                    {
                        index: 30,
                        cells: [
                            { index: 4, value: 'Total Amount:', style: { fontWeight: 'bold', textAlign: 'right' } },
                            { formula: '=SUM(F2:F30)', style: { fontWeight: 'bold' } },
                        ]
                    }],
                columns: [
                    { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
                    { width: 130 }, { width: 120 }
                ]
            }
        ],
        openUrl: 'http://localhost:62728/api/spreadsheet/open',
        saveUrl: 'http://localhost:62728/api/spreadsheet/save',
        dataBound: function () {
            if (!spreadsheet.isOpen && spreadsheet.activeSheetTab === 1) {
                spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
                spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
            }
        }
    });

    //Render initialized Spreadsheet component.
    spreadsheet.appendTo('#spreadsheet');
