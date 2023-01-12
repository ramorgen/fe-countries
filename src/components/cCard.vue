<template>
   <article @click="clicked()" class="w-[264px] bg-white dark:bg-dm_bg _card cursor-pointer hover:scale-105">
      <img loading="lazy" decoding="async" class="w-full h-[160px] object-cover rounded" :src="item.flags.svg" alt="">

      <h2 class="pl-6 pt-6 text-f18 leading-7 font-extrabold dark:text-dm_text dark:bg-dm_element">{{ item.name.common }}</h2>
      <p class=" pt-4 ">
         <span class="font-semibold">Population: </span> <span class="font-normal">{{ store.format(item.population) }}</span>
      </p>
      <p class=" pt-2 ">
         <span class="font-semibold">Region: </span> <span class="font-normal">{{ item.region }}</span>
      </p>
      <p class=" pt-2 pb-[2.875rem]">
         <span class="font-semibold">Capital: </span> <span class="font-normal">{{ store.capital(props.index) }}</span>
      </p>
   </article>
</template>


<script setup>
   import store from '../store.js'

   const props = defineProps({
      index : Number,
   })

   const item = computed(()=>{
      return store.getCountry(props.index)
   })

   const clicked = () => {
      store.selectedCountry = props.index
      store.history.push(props.index)
   }

   
</script>


<style scoped>
._card {
   box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
   border-radius: 5px;
}

p {
   @apply pl-6 text-f14 leading-4 dark:bg-dm_element;
}
</style>