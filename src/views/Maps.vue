<script setup>
import { ref, provide } from 'vue';
import Filter from '@/components/maps/MapFilter.vue';
import MapComponents from '@/components/maps/MapComponents.vue';

const clickedFilter = ref('');
provide('clickedFilter', clickedFilter);

</script>
<template>
  <Filter />
  <MapComponents />
</template>
