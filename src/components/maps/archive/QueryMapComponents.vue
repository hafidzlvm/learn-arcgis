<script setup>
import { onMounted, ref } from 'vue';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
const viewDiv = ref(null);

onMounted(() => {
  const map = new Map({
    basemap: 'arcgis/topographic', // basemap styles service
  });

  const view = new MapView({
    container: 'viewDiv',
    map: map,
    center: [-118.80543, 34.03], //Longitude, latitude
    zoom: 13,
  });

  // SQL query array
  const parcelLayerSQL = [
    'Choose a SQL where clause...',
    "UseType = 'Residential'",
    "UseType = 'Government'",
    "UseType = 'Irrigated Farm'",
    'TaxRateArea = 10853',
    'TaxRateArea = 10860',
    'TaxRateArea = 08637',
    'Roll_LandValue > 1000000',
    'Roll_LandValue < 1000000',
  ];
  let whereClause = parcelLayerSQL[0];

  // Add SQL UI
  const select = document.createElement('select');
  select.setAttribute('class', 'esri-widget esri-select');
  select.setAttribute(
    'style',
    "width: 200px; font-family: 'Avenir Next'; font-size: 1em"
  );
  parcelLayerSQL.forEach(function (query) {
    let option = document.createElement('option');
    option.innerHTML = query;
    option.value = query;
    select.appendChild(option);
  });

  view.ui.add(select, 'top-right');

  // Listen for changes
  select.addEventListener('change', (event) => {
    whereClause = event.target.value;

    queryFeatureLayer(view.extent);
  });

  // Get query layer and set up query
  const parcelLayer = new FeatureLayer({
    url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/LA_County_Parcels/FeatureServer/0',
  });

  function queryFeatureLayer(extent) {
    const parcelQuery = {
      where: whereClause, // Set by select element
      spatialRelationship: 'intersects', // Relationship operation to apply
      geometry: extent, // Restricted to visible extent of the map
      outFields: ['APN', 'UseType', 'TaxRateCity', 'Roll_LandValue'], // Attributes to return
      returnGeometry: true,
    };

    parcelLayer
      .queryFeatures(parcelQuery)

      .then((results) => {
        console.log('Feature count: ' + results.features.length);

        displayResults(results);
      })
      .catch((error) => {
        console.log(error.error);
      });
  }

  function displayResults(results) {
    // Create a blue polygon
    const symbol = {
      type: 'simple-fill',
      color: [20, 130, 200, 0.5],
      outline: {
        color: 'white',
        width: 0.5,
      },
    };

    const popupTemplate = {
      title: 'Parcel {APN}',
      content:
        'Type: {UseType} <br> Land value: {Roll_LandValue} <br> Tax Rate City: {TaxRateCity}',
    };

    // Assign styles and popup to features
    results.features.map((feature) => {
      feature.symbol = symbol;
      feature.popupTemplate = popupTemplate;
      return feature;
    });

    // Clear display
    view.closePopup();
    view.graphics.removeAll();
    // Add features to graphics layer
    view.graphics.addMany(results.features);
  }
});
</script>

<template>
  <div class="z-1" ref="viewDiv" id="viewDiv"></div>
</template>
