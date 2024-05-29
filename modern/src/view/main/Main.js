Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'main',
    requires: [
        'Ext.grid.Panel',
        'Ext.data.Store'
    ],
    layout: 'fit',
    items: [{
        xtype: 'grid',
        title: 'Basic Grid',
        store: {
            autoLoad: true,
            fields: ['name', 'email'],
            proxy: {
                type: 'ajax',
                url: 'data.json', // URL to your JSON file
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        columns: [{
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }, {
            text: 'Email',
            dataIndex: 'email',
            flex: 1
        }]
    }]
});
