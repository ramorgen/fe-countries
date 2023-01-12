<template>
<section class="text-f14 leading-6 font-normal text-lm_text dark:text-white">
   <button  @click="toggleSelect(store.selectedRegion)" class="relative w-[200px]  rounded  pl-8 shadow-custom
         py-4 text-center inline-flex items-center bg-white  dark:bg-dm_element " 
         type="button">
         {{ store.selectedRegion}}
         <svg  class="absolute w-4 h-4 right-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
         </svg>
   </button>

   <div  class="absolute top-16 w-full pt-2  bg-white rounded shadow-custom dark:bg-dm_element " 
         :class="{'hidden' : !isOpen}">
      <p @click="toggleSelect(region)" v-for="region in store.regions" :key="region" class="py-0.5 pl-8 cursor-pointer hover:font-bold">{{ region }}</p>
   </div>
</section>
</template>


<script setup>
   import store from '../store.js'

   const isOpen = ref(false)
   const toggleSelect = (region) => {
      isOpen.value = !isOpen.value
      store.selectedRegion = region
      store.filterByRegion()
   }
</script>


<style scoped>
</style>