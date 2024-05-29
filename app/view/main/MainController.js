Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onDriverNameClick: function (grid, td, cellIndex, record) {
        var driver = record.get('driver');

        Ext.create('Ext.window.Window', {
            title: 'Driver Details',
            modal: true,
            layout: 'fit',
            width: 400,
            items: [{
                xtype: 'form',
                bodyPadding: 10,
                items: [{
                    xtype: 'displayfield',
                    fieldLabel: 'Name',
                    value: driver ? driver.name : 'N/A'
                }, {
                    xtype: 'displayfield',
                    fieldLabel: 'License Number',
                    value: driver ? driver.licenseNumber : 'N/A'
                }, {
                    xtype: 'displayfield',
                    fieldLabel: 'Contact',
                    value: driver ? driver.contact : 'N/A'
                }]
            }],
            buttons: [{
                text: 'Cancel',
                handler: function () {
                    this.up('window').close();
                }
            }, {
                text: 'Ok',
                handler: function () {
                    this.up('window').close();
                }
            }]
        }).show();
    },

    onMaintenanceRecordsClick: function (grid, td, cellIndex, record) {
        var maintenanceRecords = record.get('maintenanceRecords');

        Ext.create('Ext.window.Window', {
            title: 'Maintenance Records',
            modal: true,
            layout: 'fit',
            width: 600,
            height: 400,
            items: [{
                xtype: 'grid',
                store: {
                    fields: ['date', 'description', 'cost'],
                    data: maintenanceRecords || []
                },
                columns: [{
                    text: 'Date',
                    dataIndex: 'date',
                    flex: 1
                }, {
                    text: 'Description',
                    dataIndex: 'description',
                    flex: 2
                }, {
                    text: 'Cost',
                    dataIndex: 'cost',
                    flex: 1
                }],
                viewConfig: {
                    emptyText: 'No maintenance records available'
                }
            }],
            buttons: [{
                text: 'Ok',
                handler: function () {
                    this.up('window').close();
                }
            }]
        }).show().center();
    },

    onCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e) {
        var column = grid.getColumnManager().getHeaderAtIndex(cellIndex);
        if (column.dataIndex === 'driver') {
            this.onDriverNameClick(grid, td, cellIndex, record);
        } else if (column.dataIndex === 'maintenanceRecords') {
            this.onMaintenanceRecordsClick(grid, td, cellIndex, record);
        }
    }
});
