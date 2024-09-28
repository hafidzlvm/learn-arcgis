import Graphic from '@arcgis/core/Graphic';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import { filterMap } from '@/lib/etc/filter_constant';

// Source
const source = (dataGeoJson) => {
  return dataGeoJson.features.map((feature) => {
    return new Graphic({
      geometry: {
        type: 'point',
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
      },
      attributes: feature.properties,
    });
  });
};

// Fields
const fields = [
  {
    name: 'ObjectID',
    alias: 'ObjectID',
    type: 'oid',
  },
  {
    name: 'name',
    alias: 'Name',
    type: 'string',
  },
  {
    name: 'type',
    alias: 'Type',
    type: 'string',
  },
  {
    name: 'category',
    alias: 'Category',
    type: 'string',
  },
  {
    name: 'address',
    alias: 'Address',
    type: 'string',
  },
];

// Renderer
const uniqueValueRenderer = () => {
  return new UniqueValueRenderer({
    field: 'category',
    uniqueValueInfos: filterMap.data.map((item) => {
      return {
        value: item.label,
        symbol: new PictureMarkerSymbol({
          url: item.icon,
          width: '34px',
          height: '34px',
        }),
      };
    }),
  });
};

// Popup Template
const popupTemplate = {
  title: '{name}',
  content: [
    {
      type: 'fields',
      fieldInfos: [
        {
          fieldName: 'type',
          label: 'Jenis',
        },
        {
          fieldName: 'category',
          label: 'Kategori',
        },
        {
          fieldName: 'address',
          label: 'Alamat',
        },
      ],
    },
  ],
};

const createFeatureLayer = (dataGeoJson, clickedFilter) => {
  const graphics = source(dataGeoJson);
  const renderer = uniqueValueRenderer(clickedFilter);
  const featureLayer = new FeatureLayer({
    source: graphics,
    fields: fields,
    popupTemplate: popupTemplate,
    renderer: renderer,
    minScale: 1000000,
    maxScale: 0,
  });

  return featureLayer;
};

export { source, popupTemplate, uniqueValueRenderer, createFeatureLayer };
