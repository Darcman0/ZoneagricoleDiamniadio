var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Zoneagricole2022_1 = new ol.format.GeoJSON();
var features_Zoneagricole2022_1 = format_Zoneagricole2022_1.readFeatures(json_Zoneagricole2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneagricole2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneagricole2022_1.addFeatures(features_Zoneagricole2022_1);
var lyr_Zoneagricole2022_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zoneagricole2022_1, 
                style: style_Zoneagricole2022_1,
                interactive: true,
                title: '<img src="styles/legend/Zoneagricole2022_1.png" /> Zone agricole 2022'
            });
var format_Zoneagricole2014_2 = new ol.format.GeoJSON();
var features_Zoneagricole2014_2 = format_Zoneagricole2014_2.readFeatures(json_Zoneagricole2014_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneagricole2014_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneagricole2014_2.addFeatures(features_Zoneagricole2014_2);
var lyr_Zoneagricole2014_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zoneagricole2014_2, 
                style: style_Zoneagricole2014_2,
                interactive: true,
                title: '<img src="styles/legend/Zoneagricole2014_2.png" /> Zone agricole 2014'
            });
var format_Communelimitrophe_3 = new ol.format.GeoJSON();
var features_Communelimitrophe_3 = format_Communelimitrophe_3.readFeatures(json_Communelimitrophe_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communelimitrophe_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communelimitrophe_3.addFeatures(features_Communelimitrophe_3);
var lyr_Communelimitrophe_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communelimitrophe_3, 
                style: style_Communelimitrophe_3,
                interactive: true,
                title: 'Commune limitrophe'
            });
var format_CommunedeDiamniadio_4 = new ol.format.GeoJSON();
var features_CommunedeDiamniadio_4 = format_CommunedeDiamniadio_4.readFeatures(json_CommunedeDiamniadio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunedeDiamniadio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunedeDiamniadio_4.addFeatures(features_CommunedeDiamniadio_4);
var lyr_CommunedeDiamniadio_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommunedeDiamniadio_4, 
                style: style_CommunedeDiamniadio_4,
                interactive: true,
                title: '<img src="styles/legend/CommunedeDiamniadio_4.png" /> Commune de Diamniadio'
            });
var format_rseauferroviaire_5 = new ol.format.GeoJSON();
var features_rseauferroviaire_5 = format_rseauferroviaire_5.readFeatures(json_rseauferroviaire_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rseauferroviaire_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rseauferroviaire_5.addFeatures(features_rseauferroviaire_5);
var lyr_rseauferroviaire_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rseauferroviaire_5, 
                style: style_rseauferroviaire_5,
                interactive: true,
                title: '<img src="styles/legend/rseauferroviaire_5.png" /> réseau ferroviaire'
            });
var format_Rtssecondaire_6 = new ol.format.GeoJSON();
var features_Rtssecondaire_6 = format_Rtssecondaire_6.readFeatures(json_Rtssecondaire_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rtssecondaire_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rtssecondaire_6.addFeatures(features_Rtssecondaire_6);
var lyr_Rtssecondaire_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rtssecondaire_6, 
                style: style_Rtssecondaire_6,
                interactive: true,
                title: '<img src="styles/legend/Rtssecondaire_6.png" /> Rts secondaire'
            });
var format_Routesprincipales_7 = new ol.format.GeoJSON();
var features_Routesprincipales_7 = format_Routesprincipales_7.readFeatures(json_Routesprincipales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routesprincipales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesprincipales_7.addFeatures(features_Routesprincipales_7);
var lyr_Routesprincipales_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routesprincipales_7, 
                style: style_Routesprincipales_7,
                interactive: true,
                title: '<img src="styles/legend/Routesprincipales_7.png" /> Routes principales'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Zoneagricole2022_1.setVisible(true);lyr_Zoneagricole2014_2.setVisible(true);lyr_Communelimitrophe_3.setVisible(true);lyr_CommunedeDiamniadio_4.setVisible(true);lyr_rseauferroviaire_5.setVisible(true);lyr_Rtssecondaire_6.setVisible(true);lyr_Routesprincipales_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Zoneagricole2022_1,lyr_Zoneagricole2014_2,lyr_Communelimitrophe_3,lyr_CommunedeDiamniadio_4,lyr_rseauferroviaire_5,lyr_Rtssecondaire_6,lyr_Routesprincipales_7];
lyr_Zoneagricole2022_1.set('fieldAliases', {'fid': 'fid', 'supha': 'supha', 'pourcent': 'pourcent', 'nom': 'nom', });
lyr_Zoneagricole2014_2.set('fieldAliases', {'fid': 'fid', 'supha': 'supha', 'pourcent': 'pourcent', 'nom': 'nom', });
lyr_Communelimitrophe_3.set('fieldAliases', {'fid': 'fid', 'reg': 'reg', 'dept': 'dept', 'ccrca': 'ccrca', });
lyr_CommunedeDiamniadio_4.set('fieldAliases', {'fid': 'fid', 'reg': 'reg', 'dept': 'dept', 'ccrca': 'ccrca', });
lyr_rseauferroviaire_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_Rtssecondaire_6.set('fieldAliases', {'fid': 'fid', 'visibility': 'visibility', 'draworder': 'draworder', });
lyr_Routesprincipales_7.set('fieldAliases', {'fid': 'fid', 'type': 'type', 'soustyp': 'soustyp', 'nom': 'nom', });
lyr_Zoneagricole2022_1.set('fieldImages', {'fid': '', 'supha': '', 'pourcent': '', 'nom': '', });
lyr_Zoneagricole2014_2.set('fieldImages', {'fid': '', 'supha': '', 'pourcent': '', 'nom': '', });
lyr_Communelimitrophe_3.set('fieldImages', {'fid': '', 'reg': '', 'dept': '', 'ccrca': '', });
lyr_CommunedeDiamniadio_4.set('fieldImages', {'fid': '', 'reg': '', 'dept': '', 'ccrca': '', });
lyr_rseauferroviaire_5.set('fieldImages', {'fid': '', 'name': '', });
lyr_Rtssecondaire_6.set('fieldImages', {'fid': '', 'visibility': '', 'draworder': '', });
lyr_Routesprincipales_7.set('fieldImages', {'fid': '', 'type': '', 'soustyp': '', 'nom': '', });
lyr_Zoneagricole2022_1.set('fieldLabels', {'fid': 'no label', 'supha': 'header label', 'pourcent': 'no label', 'nom': 'no label', });
lyr_Zoneagricole2014_2.set('fieldLabels', {'fid': 'no label', 'supha': 'inline label', 'pourcent': 'no label', 'nom': 'no label', });
lyr_Communelimitrophe_3.set('fieldLabels', {'fid': 'no label', 'reg': 'inline label', 'dept': 'inline label', 'ccrca': 'inline label', });
lyr_CommunedeDiamniadio_4.set('fieldLabels', {'fid': 'no label', 'reg': 'inline label', 'dept': 'inline label', 'ccrca': 'header label', });
lyr_rseauferroviaire_5.set('fieldLabels', {'fid': 'no label', 'name': 'header label', });
lyr_Rtssecondaire_6.set('fieldLabels', {'fid': 'no label', 'visibility': 'no label', 'draworder': 'no label', });
lyr_Routesprincipales_7.set('fieldLabels', {'fid': 'no label', 'type': 'no label', 'soustyp': 'inline label', 'nom': 'header label', });
lyr_Routesprincipales_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});