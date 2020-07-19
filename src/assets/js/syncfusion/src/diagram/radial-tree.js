
/**
 * Sample for Radial tree
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.RadialTree);
 //based on the option, Click event to perform ZoomIn,ZoomOut and Reset.
 function onItemClick(args) {
    switch (args.item.text) {
        case 'Zoom In':
            var zoomin = { type: 'ZoomIn', zoomFactor: 0.2 };
            diagram.zoomTo(zoomin);
            break;
        case 'Zoom Out':
            var zoomout = { type: 'ZoomOut', zoomFactor: 0.2 };
            diagram.zoomTo(zoomout);
            break;
        case 'Reset':
            diagram.reset();
            diagram.fitToPage();
            break;
    }
}
this.default = function () {
    //Initialize diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '600px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        //configures data source settings
        dataSourceSettings: {
            id: 'Id', parentId: 'ReportingPerson',
            dataSource: new ej.data.DataManager(window.radialTree),
            //binds the data with the nodes
            doBinding: function (nodeModel, data, diagram) {
                nodeModel.annotations = [{
                    content: data.Name,
                    style: data.Id === 'parent' ? { color: 'white', fontSize: 50 } : { color: 'black', fontSize: 20 }
                }];
                nodeModel.constraints = ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.InheritTooltip | ej.diagrams.NodeConstraints.Tooltip;
                nodeModel.tooltip = {
                    content: data.Name + '<br/>' + data.Designation, relativeMode: 'Object',
                    position: 'TopCenter', showTipPointer: true
                };
                if (data.Designation === 'Managing Director') {
                    nodeModel.width = 400;
                    nodeModel.height = 400;
                    nodeModel.shape = { shape: 'Ellipse' };
                    nodeModel.style = { fill: 'black' };
                }
                else if (data.Designation === 'Project Manager') {
                    nodeModel.width = 130;
                    nodeModel.height = 130;
                    nodeModel.style = { fill: '#f8ab52' };
                }
                else {
                    nodeModel.width = 100;
                    nodeModel.height = 100;
                    nodeModel.shape = { shape: 'Ellipse' };
                    nodeModel.style = { fill: '#afeeee' };
                }
            }
        },
        //Disables all interactions except zoom/pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        //Configures automatic layout
        layout: {
            type: 'RadialTree', verticalSpacing: 30, horizontalSpacing: 20,
            root: 'Category',
        },
        //Defines the default node and connector properties
        getNodeDefaults: function (obj, diagram) {
            return obj;
        }, getConnectorDefaults: function (connector, diagram) {
            connector.type = 'Straight';
            return connector;
        }
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage();
    //create and add ZoomIn,ZoomOut and Reset options in ToolBar.
    var toolbarObj = new ej.navigations.Toolbar({
        clicked: onItemClick,
        items: [
            { type: 'Button', tooltipText: 'ZoomIn', text: 'Zoom In', prefixIcon: 'e-ddb-icons e-zoomin' }, { type: 'Separator' },
            { type: 'Button', tooltipText: 'ZoomOut', text: 'Zoom Out', prefixIcon: 'e-ddb-icons e-zoomout' }, { type: 'Separator' },
            { type: 'Button', tooltipText: 'Reset', text: 'Reset', prefixIcon: 'e-ddb-icons e-reset' }
        ]
    });

    toolbarObj.appendTo('#toolbar');
};