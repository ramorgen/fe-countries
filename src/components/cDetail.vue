<template>
   <section class="h-full " >

      <button @click="back()"  class="absolute back flex flex-row top-10 left-10 lg:top-20 lg:left-20 py-3 px-9 bg-lm_bg dark:bg-dm_element dark:text-dm_text" >
         <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
         </span>
         <span class="pl-4">Back</span>
      </button>
      <div class="h-full flex flex-col lg:flex-row items-center justify-center px-3 mt-40 md:mt-0">
         <div class="md:w-1/2">
            <img class="w-[560px] mx-auto md:pl-2" :src="item.flags.svg" alt="">
         </div>
         <div class="md:w-1/2 md:grid md:grid-cols-2 relative mt-10 lg:mt-0 lg:ml-[3.75rem] mr-" >
            <h2 class="col-span-2 text-[2rem] font-bold leading-[44px]">{{ item.name.common }}</h2>
            <div>
            
               <p class=" pt-4 text-f16 leading-8">
                  <span class=" font-semibold">Native Name: </span> <span class="font-normal">{{ nativeName }}</span>
               </p>
               <p class="  text-f16 leading-8">
                  <span class=" font-semibold">Population: </span> <span class="font-normal">{{ store.format(item.population) }}</span>
               </p>
               <p class="  text-f16 leading-8">
                  <span class=" font-semibold">Region: </span> <span class="font-normal">{{ item.region }}</span>
               </p>
               <p class="  text-f16 leading-8">
                  <span class=" font-semibold">Sub Region: </span> <span class="font-normal">{{ item.subregion }}</span>
               </p>
               <p class="  text-f16 leading-8">
                  <span class=" font-semibold">Capital: </span> <span class="font-normal">{{ store.capital(store.selectedCountry) }}</span>
               </p>
            </div>
            <div class="pt-4 md:pl-10 md:pr-2">
               <p class="text-f16 leading-8">
                  <span class=" font-semibold">Top Level Domain: </span> <span class="font-normal">{{ tld }}</span>
               </p>
               <p class="  text-f16 leading-8">
                  <span class=" font-semibold">Currencies: </span> <span class="font-normal">{{ cur }}</span>
               </p>
               <p class="  text-f16 leading-8">
                  <span class=" font-semibold">Languages: </span> <span class="font-normal">{{ lang }}</span>
               </p>
            </div>
            <div class="col-span-2 pt-[55px] pr-2">
               <div class="flex flex-row flex-wrap gap-2 items-center pb-6 md:pb-0">
                  <p class="text-f16 font-bold">Border Countries:</p>
                  <p @click="store.findCountryByName(item)" class="borders px-5 py-2 cursor-pointer hover:font-bold dark:bg-dm_element" 
                     v-for = "item in borders" :key="item">{{ item }}
                  </p>
               </div>
               
            </div>
         </div>
      
      </div>
   </section>
</template>


<script setup>
   import store from '../store.js'


   const empty = " -- "

   const item = computed(()=>{
      return store.getCountry()
   })

   const nativeName = computed(()=>{
      if (item.value.name.nativeName !== undefined){
         return Object.entries(item.value.name.nativeName).map( item => item[1].common ).join(', ')
      }
      return empty
   })

   const tld = computed(() => {
      if(item.value.tld !== undefined){
         return Object.entries(item.value.tld).map( item => item[1]).join(', ')
      }
      return empty
   })
   const cur = computed(() => {
      if(item.value.currencies !== undefined){
         return Object.entries(item.value.currencies).map( item => item[1].name ).join(', ')
      }
      return empty

   })
   const lang = computed(() => {
      if(item.value.languages !== undefined){
         return Object.entries(item.value.languages).map( item => item[1]).join(', ')
      }
      return empty
   })
   const borders = computed(() => {
      return store.filterBorderCountries()
   })
   const back = () => {
      if (store.history.length === 0  ){
         store.selectedCountry=null
      } else if (store.history.length === 1 && store.selectedCountry === store.history[0]) {  
         store.selectedCountry=null
         store.history = []
      } else {
         if (store.selectedCountry === store.history.slice(-1)[0]){
            store.history.pop()
            store.selectedCountry = store.history.pop()
         } else {
            store.selectedCountry = store.history.pop()
         }
      }
   }

  
</script>


<style scoped>
   .borders {
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
      border-radius: 2px;
   }
   .back{
      box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
      border-radius: 6px;
   }

</style>