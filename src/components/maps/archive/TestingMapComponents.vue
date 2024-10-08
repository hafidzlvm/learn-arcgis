<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Zoom from '@arcgis/core/widgets/Zoom';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

const viewDiv = ref(null);

const point = {
  //Create a point
  type: 'point',
  longitude: 106.8215, // Jakarta
  latitude: -6.1754,
};

const simpleMarkerSymbol = {
  type: 'simple-marker',
  color: [0, 0, 255], // Blue
  outline: {
    color: [255, 255, 255], // White
    width: 1,
  },
  size: 4,
};

const zoom = ref(12);

let mapView;
let zoomWidget;

onMounted(() => {
  const map = new Map({
    basemap: 'streets-vector',
  });

  mapView = new MapView({
    container: viewDiv.value,
    map: map,
    // zoom: 15,
    // center: [117.76, -1.46], // Indonesia
    // center: [106.8215, -6.1754], // Jakarta
    center: [-118.80543, 34.027],
    zoom: zoom.value,
  });

  // Point Graphic
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
  const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
    visible: true,
  });
  graphicsLayer.add(pointGraphic);

  // Line Graphic
  const lineGraphic = new Graphic({
    geometry: {
      type: 'polyline',
      paths: [
        [106.83806847947368, -6.164067787993006],
        [106.8419308604551, -6.178574447396408],
        [106.8419309904551, -6.978574447396408],
      ],
    },
    symbol: {
      type: 'simple-line',
      color: [255, 0, 0],
      width: 2,
    },
  });
  graphicsLayer.add(lineGraphic);

  // Polygon Graphic
  const polygon = {
    type: 'polygon',
    rings: [
      [106.845599, -6.208763], // Jakarta Pusat (Monas)
      [106.834234, -6.229095], // Jakarta Pusat (Gambir)
      [106.795075, -6.207092], // Jakarta Selatan (Kebayoran Baru)
      [106.823313, -6.300324], // Jakarta Timur (Cakung)
    ],
  };
  const simpleFillSymbol = {
    type: 'simple-fill',
    color: [227, 139, 79, 0.8], // Orange, opacity 80%
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
  };

  // Popup Template
  const popupTemplate = {
    title: '{Name}',
    content: '{Description}',
  };
  const attributes = {
    Name: 'Graphic',
    Description: 'I am a polygon',
  };

  const polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: simpleFillSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate,
  });
  graphicsLayer.add(polygonGraphic);

  // Search Widget
  const searchWidget = new Search({
    view: mapView,
  });
  mapView.ui.add(searchWidget, {
    position: 'top-right',
  });

  // Define a pop-up for Trailheads
  const popupTrailheads = {
    title: 'Trailhead',
    content:
      '<b>Trail:</b> {TRL_NAME}<br><b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft',
  };
  const handles = [
    mapView.on('popup-open', () => {
      console.log('Popup opened');
      // Lakukan sesuatu ketika popup dibuka
    }),

    mapView.on('click', (event) => {
      mapView.hitTest(event).then((response) => {
        if (response.results.length) {
          const graphic = response.results[0].graphic;
          if (graphic.layer.title === 'Trailheads') {
            console.log('Clicked on:', graphic.attributes.TRL_NAME);
            // Lakukan sesuatu ketika feature di-klik
          }
        }
      });
    }),
  ];

  // Menambahkan handles ke view
  handles.forEach((handle) => mapView.addHandles(handle));

  const trailheadsRenderer = {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: 'http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png',
      width: '18px',
      height: '18px',
    },
  };
  const trailheadsLabels = {
    symbol: {
      type: 'text',
      color: '#FFFFFF',
      haloColor: '#5E8D74',
      haloSize: '2px',
      font: {
        size: '12px',
        family: 'Noto Sans',
        style: 'italic',
        weight: 'normal',
      },
    },

    labelPlacement: 'above-center',
    labelExpressionInfo: {
      expression: '$feature.TRL_NAME',
    },
  };
  const trailheadsLayer = new FeatureLayer({
    url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0',
    renderer: trailheadsRenderer,
    labelingInfo: [trailheadsLabels],
    popupTemplate: popupTrailheads,
  });
  map.add(trailheadsLayer);
  // Parks and open spaces (polygons)
  const parksLayer = new FeatureLayer({
    url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0',
  });
  //Trails feature layer (lines)
  const trailsRenderer = {
    type: 'simple',
    symbol: {
      color: '#BA55D3',
      type: 'simple-line',
      style: 'solid',
    },

    visualVariables: [
      {
        type: 'size',
        field: 'ELEV_GAIN',
        minDataValue: 0,
        maxDataValue: 2300,
        minSize: '3px',
        maxSize: '7px',
      },
    ],
  };
  const trailsLayer = new FeatureLayer({
    url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0',
    renderer: trailsRenderer,
    opacity: 0.75,
  });
  map.add(trailsLayer, 0);
  map.add(parksLayer, 0);

  const shipPopupTemplate = {
    title: '{name}',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'name',
            label: 'Nama Kapal',
          },
          {
            fieldName: 'status',
            label: 'Status',
          },
        ],
      },
    ],
  };

  const bikeTrailsRenderer = {
    type: 'simple',
    symbol: {
      type: 'simple-line',
      style: 'short-dot',
      color: '#FF91FF',
      width: '1px',
    },
  };
  const bikeTrails = new FeatureLayer({
    url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0',
    renderer: bikeTrailsRenderer,
    definitionExpression: "USE_BIKE = 'YES'",
  });

  function createFillSymbol(value, color) {
    return {
      value: value,
      symbol: {
        color: color,
        type: 'simple-fill',
        style: 'solid',
        outline: {
          style: 'none',
        },
      },
      label: value,
    };
  }
  const openSpacesRenderer = {
    type: 'unique-value',
    field: 'TYPE',
    uniqueValueInfos: [
      createFillSymbol('Natural Areas', '#9E559C'),
      createFillSymbol('Regional Open Space', '#A7C636'),
      createFillSymbol('Local Park', '#149ECE'),
      createFillSymbol('Regional Recreation Park', '#ED5151'),
    ],
  };

  // Feature Layer untuk kapal
  const featureLayer = new FeatureLayer({
    source: [], // Data kosong untuk fitur kapal
    fields: [
      {
        name: 'ObjectID',
        type: 'oid',
      },
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'status',
        type: 'string',
      },
    ],
    geometryType: 'point',
    spatialReference: { wkid: 4326 },
    popupTemplate: shipPopupTemplate, // Tambahkan ini
  });

  // Menambahkan feature layer ke peta
  map.add(featureLayer);

  // Contoh data kapal
  const ships = [
    { name: 'Kapal 1', status: 'Aktif', location: [117.1611, -0.7893] },
    { name: 'Kapal 2', status: 'Tidak Aktif', location: [115.8535, -0.646] },
  ];

  // Menambahkan kapal ke feature layer
  ships.forEach((ship) => {
    const point = {
      type: 'point',
      longitude: ship.location[0],
      latitude: ship.location[1],
    };

    const attributes = {
      name: ship.name,
      status: ship.status,
    };

    const pointGraphic = new Graphic({
      geometry: point,
      attributes: attributes,
      popupTemplate: shipPopupTemplate, // Tambahkan ini
      symbol: simpleMarkerSymbol,
    });

    featureLayer.applyEdits({
      addFeatures: [pointGraphic],
    });
  });

  // Define a popup for Trails
  const popupTrails = {
    title: 'Trail Information',
    content: [
      {
        type: 'media',
        mediaInfos: [
          {
            type: 'column-chart',
            caption: '',
            value: {
              fields: ['ELEV_MIN', 'ELEV_MAX'],
              normalizeField: null,
              tooltipField: 'Min and max elevation values',
            },
          },
        ],
      },
    ],
  };

  const trails = new FeatureLayer({
    url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0',
    outFields: ['TRL_NAME', 'ELEV_GAIN'],
    popupTemplate: popupTrails,
  });

  const popupOpenspaces = {
    title: '{PARK_NAME}',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'AGNCY_NAME',
            label: 'Agency',
            isEditable: true,
            tooltip: '',
            visible: true,
            format: null,
            stringFieldOption: 'text-box',
          },
          {
            fieldName: 'TYPE',
            label: 'Type',
            isEditable: true,
            tooltip: '',
            visible: true,
            format: null,
            stringFieldOption: 'text-box',
          },
          {
            fieldName: 'ACCESS_TYP',
            label: 'Access',
            isEditable: true,
            tooltip: '',
            visible: true,
            format: null,
            stringFieldOption: 'text-box',
          },

          {
            fieldName: 'GIS_ACRES',
            label: 'Acres',
            isEditable: true,
            tooltip: '',
            visible: true,
            format: {
              places: 2,
              digitSeparator: true,
            },

            stringFieldOption: 'text-box',
          },
        ],
      },
    ],
  };

  const openspaces = new FeatureLayer({
    url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0',
    outFields: [
      'TYPE',
      'PARK_NAME',
      'AGNCY_NAME',
      'ACCESS_TYP',
      'GIS_ACRES',
      'TRLS_MI',
      'TOTAL_GOOD',
      'TOTAL_FAIR',
      'TOTAL_POOR',
    ],
    renderer: openSpacesRenderer,
    popupTemplate: popupOpenspaces,
  });

  map.add(openspaces, 0);
  map.add(trails, 0);
  // mapView.on('click', (event) => {
  //   console.log(event.mapPoint.longitude, event.mapPoint.latitude);
  // });
  mapView.ui.remove('zoom');
  zoomWidget = new Zoom({
    view: mapView,
    visible: false,
  });
  mapView.ui.add(zoomWidget);
  mapView.watch('zoom', (newZoomValue) => {
    zoom.value = newZoomValue;
  });
});


const zoomIn = () => {
  if (zoomWidget) {
    zoomWidget.zoomIn();
  }
};

const zoomOut = () => {
  if (zoomWidget) {
    zoomWidget.zoomOut();
  }
};

</script>

<template>
  <!-- button zoom -->
  <div class="position-absolute z-2">
    <button @click="zoomIn">Zoom In</button>
    <button @click="zoomOut">Zoom Out</button>
  </div>
  <div class="z-1" ref="viewDiv" id="viewDiv"></div>
</template>
