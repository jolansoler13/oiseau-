var wms_layers = [];

var lyr_lycee_elargi_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_elargi_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_elargi_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_tracksany_1 = new ol.format.GeoJSON();
var features_tracksany_1 = format_tracksany_1.readFeatures(json_tracksany_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracksany_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracksany_1.addFeatures(features_tracksany_1);
var lyr_tracksany_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tracksany_1, 
                style: style_tracksany_1,
                interactive: true,
                title: '<img src="styles/legend/tracksany_1.png" /> tracks any'
            });
var format_pointoiseaux_2 = new ol.format.GeoJSON();
var features_pointoiseaux_2 = format_pointoiseaux_2.readFeatures(json_pointoiseaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointoiseaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointoiseaux_2.addFeatures(features_pointoiseaux_2);
var lyr_pointoiseaux_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointoiseaux_2, 
                style: style_pointoiseaux_2,
                interactive: true,
                title: '<img src="styles/legend/pointoiseaux_2.png" /> point oiseaux'
            });

lyr_lycee_elargi_georef_0.setVisible(true);lyr_tracksany_1.setVisible(true);lyr_pointoiseaux_2.setVisible(true);
var layersList = [lyr_lycee_elargi_georef_0,lyr_tracksany_1,lyr_pointoiseaux_2];
lyr_tracksany_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_pointoiseaux_2.set('fieldAliases', {'oiseaux': 'oiseaux', });
lyr_tracksany_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_pointoiseaux_2.set('fieldImages', {'oiseaux': 'TextEdit', });
lyr_tracksany_1.set('fieldLabels', {'name': 'inline label', 'cmt': 'inline label', 'desc': 'inline label', 'src': 'inline label', 'link1_href': 'inline label', 'link1_text': 'inline label', 'link1_type': 'inline label', 'link2_href': 'inline label', 'link2_text': 'inline label', 'link2_type': 'inline label', 'number': 'inline label', 'type': 'inline label', });
lyr_pointoiseaux_2.set('fieldLabels', {'oiseaux': 'no label', });
lyr_pointoiseaux_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});