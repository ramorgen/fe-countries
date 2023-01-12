<template>
   <section class="relative mb-8">
      <div class="relative pt-6 md:pt-16 pb-10 md:pb-16 w-full flex flex-col md:flex-row md:justify-between md:items-center">
         <cSearch class="ml-3 md:absolute md:pl-10 lg:pl-20"></cSearch>
         <cSelect class="ml-3 pt-6 md:pt-0 md:absolute md:right-10 lg:right-20"></cSelect>
      </div>
      <div class="_grid ml-3 mr-3 md:ml-20 md:mr-20">
         <cCard v-for="(item,index) in data"  :key="index" :index="item.index" ></cCard> 
         
      </div>
   </section>
</template>


<script setup>
   import store from '../store.js'
   
   const data = computed(()=>{
     return store.getData()
   })
</script>


<style scoped>
   ._grid {
      display: grid;
      gap: 74px;
      grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
      place-items: center;
   }
</style>