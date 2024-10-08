<script setup>
import { onMounted, ref } from 'vue';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FilterMaps from './FilterMaps.vue';
const viewDiv = ref(null);

onMounted(() => {
  const map = new Map({
    basemap: 'streets-vector',
  });

  const mapView = new MapView({
    container: viewDiv.value,
    map: map,
    // zoom: 15,
    // center: [117.76, -1.46], // Indonesia
    center: [106.8215, -6.1754], // Jakarta
    // center: [-118.80543, 34.027],
    zoom: 13,
    ui: {
      components: [],
    },
  });

});
</script>

<template>
  <div class="z-1" ref="viewDiv" id="viewDiv"></div>
</template>
