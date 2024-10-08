<script setup>
import { ref, onMounted } from 'vue';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';

const viewDiv = ref(null);

const VTLayer = new VectorTileLayer({
  url: 'https://vectortileservices3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Santa_Monica_Mountains_Parcels_VTL/VectorTileServer/',
});

onMounted(() => {
  const map = new Map({
  basemap: 'arcgis/light-gray',
  layers: [VTLayer],
});

const view = new MapView({
  container: viewDiv.value,
    map: map,
  });
});
</script>
<template>
  <div ref="viewDiv" class="w-100 h-100"></div>
</template>
