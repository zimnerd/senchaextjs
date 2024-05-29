Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'main',
    requires: [
        'Ext.grid.Panel',
        'Ext.data.Store',
        'Ext.window.Window',
        'Ext.button.Button',
        'MyApp.view.main.MainController'
    ],
    controller: 'main',
    layout: 'fit',
    items: [{
        xtype: 'grid',
        title: 'Vehicles List',
        store: {
            autoLoad: true,
            fields: ['vehicleId', 'vehicleType', 'model', 'year', 'licensePlate', 'driver', 'maintenanceRecords'],
            proxy: {
                type: 'ajax',
                url: '/data.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        columns: [{
            text: 'Vehicle ID',
            dataIndex: 'vehicleId',
            flex: 1
        }, {
            text: 'Vehicle Type',
            dataIndex: 'vehicleType',
            flex: 1
        }, {
            text: 'Model',
            dataIndex: 'model',
            flex: 1
        }, {
            text: 'Year',
            dataIndex: 'year',
            flex: 1
        }, {
            text: 'License Plate',
            dataIndex: 'licensePlate',
            flex: 1
        }, {
            text: 'Driver Name',
            dataIndex: 'driver',
            renderer: function (value) {
                return value ? value.name : 'N/A';
            },
            flex: 1
        }, {
            text: 'Last Maintained Date',
            dataIndex: 'maintenanceRecords',
            renderer: function (value) {
                if (value && value.length > 0) {
                    var lastRecord = value[value.length - 1];
                    return lastRecord.date;
                }
                return 'N/A';
            },
            flex: 1
        }],
        listeners: {
            cellclick: 'onCellClick'
        }
    }]
});
