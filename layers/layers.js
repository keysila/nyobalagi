var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_2_0.png" /> <br />'
        });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_3.png" /> Clipped'
            });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_4.png" /> Clipped'
            });
var format_Clipped_5 = new ol.format.GeoJSON();
var features_Clipped_5 = format_Clipped_5.readFeatures(json_Clipped_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_5.addFeatures(features_Clipped_5);
var lyr_Clipped_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_5, 
                style: style_Clipped_5,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_5.png" /> Clipped'
            });
var format_Clipped_6 = new ol.format.GeoJSON();
var features_Clipped_6 = format_Clipped_6.readFeatures(json_Clipped_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_6.addFeatures(features_Clipped_6);
var lyr_Clipped_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_6, 
                style: style_Clipped_6,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_6.png" /> Clipped'
            });
var format_Clipped_7 = new ol.format.GeoJSON();
var features_Clipped_7 = format_Clipped_7.readFeatures(json_Clipped_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_7.addFeatures(features_Clipped_7);
var lyr_Clipped_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_7, 
                style: style_Clipped_7,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_7.png" /> Clipped'
            });
var format_Clipped_8 = new ol.format.GeoJSON();
var features_Clipped_8 = format_Clipped_8.readFeatures(json_Clipped_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_8.addFeatures(features_Clipped_8);
var lyr_Clipped_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_8, 
                style: style_Clipped_8,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_8.png" /> Clipped'
            });
var format_Clipped_9 = new ol.format.GeoJSON();
var features_Clipped_9 = format_Clipped_9.readFeatures(json_Clipped_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_9.addFeatures(features_Clipped_9);
var lyr_Clipped_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_9, 
                style: style_Clipped_9,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_9.png" /> Clipped'
            });
var format_Clipped_10 = new ol.format.GeoJSON();
var features_Clipped_10 = format_Clipped_10.readFeatures(json_Clipped_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_10.addFeatures(features_Clipped_10);
var lyr_Clipped_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_10, 
                style: style_Clipped_10,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_10.png" /> Clipped'
            });
var format_Clipped_11 = new ol.format.GeoJSON();
var features_Clipped_11 = format_Clipped_11.readFeatures(json_Clipped_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_11.addFeatures(features_Clipped_11);
var lyr_Clipped_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_11, 
                style: style_Clipped_11,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_11.png" /> Clipped'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_Clipped_3.setVisible(true);lyr_Clipped_4.setVisible(true);lyr_Clipped_5.setVisible(true);lyr_Clipped_6.setVisible(true);lyr_Clipped_7.setVisible(true);lyr_Clipped_8.setVisible(true);lyr_Clipped_9.setVisible(true);lyr_Clipped_10.setVisible(true);lyr_Clipped_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_Clipped_2,lyr_Clipped_3,lyr_Clipped_4,lyr_Clipped_5,lyr_Clipped_6,lyr_Clipped_7,lyr_Clipped_8,lyr_Clipped_9,lyr_Clipped_10,lyr_Clipped_11];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Clipped_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Clipped_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Clipped_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_Clipped_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Clipped_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Clipped_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Clipped_8.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_Clipped_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Clipped_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Clipped_11.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'isced_leve': 'isced_leve', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'addr_house': 'addr_house', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Clipped_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Clipped_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_Clipped_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_Clipped_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Clipped_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_Clipped_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Clipped_8.set('fieldImages', {'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ALIAS': 'TextEdit', 'LOKTPN': 'TextEdit', 'REMARK': 'TextEdit', 'KLSTPN': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FTYPE': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'KOORDY': 'TextEdit', 'KOORDX': 'TextEdit', 'KOORDINAT1': 'TextEdit', 'KORDINTAT2': 'TextEdit', 'LUAS': 'TextEdit', 'Elevasi': 'TextEdit', 'NAMLOK': 'TextEdit', 'NAMSPE': 'TextEdit', 'NAMMAP': 'TextEdit', 'NAMGAZ': 'TextEdit', 'SJHNAM': 'TextEdit', 'ARTINAM': 'TextEdit', 'ASLBHS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_Clipped_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Clipped_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JNSLDG': 'TextEdit', 'TNMLDG': 'TextEdit', 'TIPLDG': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Clipped_11.set('fieldImages', {'osm_id': '', 'osm_type': '', 'depth': '', 'railway': '', 'blockage': '', 'roof_mater': '', 'amenity': '', 'name': '', 'width': '', 'public_tra': '', 'bridge': '', 'smoothness': '', 'landuse': '', 'covered': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'isced_leve': '', 'aeroway': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'emergency': '', 'highway': '', 'water': '', 'surface': '', 'pump': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'layer': '', 'addr_house': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Clipped_3.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Clipped_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'inline label - always visible', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_Clipped_5.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'inline label - always visible', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Clipped_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Clipped_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'inline label - always visible', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Clipped_8.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'inline label - always visible', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_Clipped_9.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Clipped_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Clipped_11.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'isced_leve': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'layer': 'no label', 'addr_house': 'no label', });
lyr_Clipped_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});