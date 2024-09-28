<script setup>
import { onMounted, ref, watch } from 'vue';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config.js';
import { setArcgisAssetPath as setMapAssetPath } from '@arcgis/map-components/dist/components';
import Zoom from '@arcgis/core/widgets/Zoom';

import { inject } from 'vue';
import { geojsonData } from '@/lib/etc/data.js';
import { Button } from '@/components/ui/button';
import { createFeatureLayer } from '@/components/maps/PointLayer.js';

setMapAssetPath('./assets');
esriConfig.assetsPath = './assets';

const clickedFilter = inject('clickedFilter');
const viewDiv = ref(null);
const zoomDiv = ref(null);
let map = null;
let featureLayer = null;
let zoom = null;
onMounted(() => {
  map = new Map({
    basemap: 'streets-vector',
  });

  const mapView = new MapView({
    container: viewDiv.value,
    map: map,
    center: [106.8215, -6.1754], // Jakarta
    zoom: 13,
    ui: {
      components: [],
    },
  });

  featureLayer = createFeatureLayer(geojsonData, clickedFilter);
  map.add(featureLayer);

  zoom = new Zoom({
    view: mapView,
    visible: false,
  });

  // Tambahkan widget Zoom ke view
  mapView.ui.add(zoom);

  function updateFilter(i) {
    if (i === null) {
      featureLayer.definitionExpression = '1=1';
    } else {
      const categoryFilter = `category = '${i.label}'`;
      featureLayer.definitionExpression = categoryFilter;
    }
  }

  // Watch perubahan filter
  watch(clickedFilter, (i) => {
    updateFilter(i);
  });
});

const zoomIn = () => {
  if (zoom) {
    zoom.zoomIn();
  }
};

const zoomOut = () => {
  if (zoom) {
    zoom.zoomOut();
  }
};
</script>

<template>
  <!-- class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 p-4 my-1 bg-slate-100" -->
  <div class="z-10 bottom-0 left-0 absolute p-2 gap-x-5 flex flex-col" ref="zoomDiv">
    <Button class="px-3 my-1 text-black bg-white hover:bg-slate-100" @click="zoomIn">+</Button>
    <Button class="px-3 text-black bg-white hover:bg-slate-100" @click="zoomOut">-</Button>
  </div>
  <div class="z-1" ref="viewDiv" id="viewDiv"></div>
</template>
