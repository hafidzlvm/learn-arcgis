<script setup>
import { onMounted, ref, watch } from 'vue';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config.js';
import { setArcgisAssetPath as setMapAssetPath } from '@arcgis/map-components/dist/components';

import LOD from "@arcgis/core/layers/support/LOD.js";
import Zoom from '@arcgis/core/widgets/Zoom';
import ScaleBar from '@arcgis/core/widgets/ScaleBar.js';

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
  const customLODs = [
    new LOD({ level: 7, resolution: 1222.99245256282, scale: 4622324.434309 }),
    new LOD({ level: 8, resolution: 611.49622628141, scale: 2311162.217155 }),
    new LOD({ level: 9, resolution: 305.748113140705, scale: 1155581.108577 }),
    new LOD({ level: 10, resolution: 152.874056570353, scale: 577790.554289 }),
    new LOD({ level: 11, resolution: 76.4370282851763, scale: 288895.277144 }),
    new LOD({ level: 12, resolution: 38.2185141425881, scale: 144447.638572 }),
    new LOD({ level: 13, resolution: 19.1092570712941, scale: 72223.819286 }),
    new LOD({ level: 14, resolution: 9.55462853564703, scale: 36111.909643 }),
    new LOD({ level: 15, resolution: 4.77731426782352, scale: 18055.954822 }),
    new LOD({ level: 16, resolution: 2.38865713391176, scale: 9027.977411 }),
  ];

  map = new Map({
    basemap: 'streets-vector',
  });

  const mapView = new MapView({
    container: viewDiv.value,
    map: map,
    center: [106.8215, -6.1754], // Jakarta
    zoom: 13,
    constraints: {
      lods: customLODs,
      snapToZoom: false
    },
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
  mapView.ui.add(zoom);

  let scaleBar = new ScaleBar({
    view: mapView,
    visible: true,
  });
  mapView.ui.add(scaleBar, 'bottom-right');

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
  <div
    class="z-10 bottom-0 left-0 absolute p-2 gap-x-5 flex flex-col"
    ref="zoomDiv"
  >
    <Button
      class="px-3 my-1 text-black bg-white hover:bg-slate-100"
      @click="zoomIn"
      >+</Button
    >
    <Button class="px-3 text-black bg-white hover:bg-slate-100" @click="zoomOut"
      >-</Button
    >
  </div>
  <div class="z-1" ref="viewDiv" id="viewDiv"></div>
</template>
