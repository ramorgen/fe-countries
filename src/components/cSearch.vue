<template>
   <form >
      <div class="relative w-[350px] md:w-[480px] search bg-lm_bg dark:bg-dm_element  dark:text-dm_text text-lm_text">
         <span class="absolute inset-y-0 left-0 flex items-center pl-2 dark:bg-dm_element" >
            <button @click.prevent="search()" type="submit" class="pt-2  pl-8 focus:outline-none focus:shadow-outline">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
         </span>

         <input v-model="cName" class="w-full h-[56px] dark:bg-dm_element  py-2 text-sm text-lm_text dark:text-dm_text rounded-md pl-24 
               focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search for a country..." >

         <span v-if="cName!==''" class="absolute inset-y-0 right-0 flex items-center pl-2 dark:bg-dm_element" >
            <button @click.prevent="cName='';store.reset()" type="submit" class="pt-2  pl-8 focus:outline-none focus:shadow-outline">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
               </svg>
            </button>
         </span>               
      </div>
   </form>
</template>


<script setup>
   import store from '../store.js'

   const cName = ref(null)
   const search = () => {
      store.filterByName(cName.value.toUpperCase())
   }

   watch(() => cName.value, (newVal) => {
       store.filterByName(newVal.toUpperCase())
   })
</script>


<style scoped>
.search{
   box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
   border-radius: 5px;
}
</style>