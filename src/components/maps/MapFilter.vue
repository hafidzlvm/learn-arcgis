<script setup>
import { inject, toRef, ref } from 'vue';
import { filterMap } from '@/lib/etc/filter_constant';
import { Input } from '@/components/ui/input';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const isOpen = ref(false);

const filter = toRef(filterMap);
const clickedFilter = inject('clickedFilter');
const handleClick = (filter) => {
  clickedFilter.value = filter;
};
const handleResetFilter = () => {
  clickedFilter.value = null;
};
</script>
<template>
  <div
    class="z-10 flex flex-col justify-start items-start absolute m-3 gap-x-5"
  >
    <div class="mb-1">
      <Input class="mr-32 my-0 mb-1" placeholder="Search" />
    </div>
    <Collapsible v-model:open="isOpen">
      <CollapsibleTrigger>
        <div
          class="text-md bg-white px-3 py-1 rounded-md border border-slate-900 ring-offset-white hover:bg-slate-100 hover:border-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400"
        >
          Filter
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        class="w-full bg-white my-2 rounded-md border border-slate-900 me-16 ms-2"
      >
        <div class="flex flex-col gap-y-2 justify-start items-start p-2 w-full">
          <div
            class="flex text-nowrap"
            v-for="(item, index) in filter.data"
            :key="index"
            :value="item.label"
            @click="handleClick(item)"
          >
            <div class="rounded-3 inline-flex" role="button">
              <span class="hover-effect">{{ item.label }}</span>
            </div>
          </div>
        </div>
        <div class="before:content-[''] before:border-t before:border-slate-900 before:w-full before:relative before:top-0 before:left-0 before:block mb-2"></div>
        <div
          class="px-2 pb-2 flex hover-effect text-nowrap hover:cursor-pointer justify-center items-center w-full "
          @click="handleResetFilter"
        >
          Reset Filter
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>

<style scoped>
.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  opacity: 0.9;
  transform: scale(1.01);
}
</style>
