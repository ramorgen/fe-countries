<template>
   <div class="h-full" :class="store.mode==='dark' ? 'dark' : ''">
      <header  class="h-[80px]  flex flex-row items-center justify-between  bg-white dark:bg-dm_element dark:text-dm_text ">
         <h1 @click="store.reset()" class="cursor-pointer ml-4 md:ml-20 text-f14 md:text-f24 leading-[2.062rem] ">Where in the world</h1>
         <button @click ="store.toggleMode()" class="cursor-pointer flex flex-row items-center">
            <svg v-if="store.mode==='light'" xmlns="http://www.w3.org/2000/svg"  class="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>

            <span class="pl-2 md:pl-4 mr-4 md:pr-20 text-f13 md:text-f16 font-semibold leading-[1.375rem]">{{ mode }} Mode</span>
         </button>
      </header>
      <main class="relative h-screens md:h-[944px] bg-lm_bg dark:bg-dm_bg dark:text-dm_text  overflow-y-scroll">
         <component :is="actualComponent" />
      </main>
   </div>
</template>

<script setup>
   import store from "./store.js"
   import axios from 'axios'
   import Home from '@/components/home.vue'
   import cDetail from '@/components/cDetail.vue'
  
   const mode = computed(()=>{
      return store.mode==='light' ? 'Dark' : 'Light'
   })

   const actualComponent = computed(()=>{
      return store.selectedCountry===null ? Home : cDetail
   })

   onMounted(() => {
      async function getData() {
         let erg
         erg = await axios.get('https://restcountries.com/v3.1/all')
         if (erg){
            store.data = erg.data.map((item,index) => {
               item.index=index
               return item
            })
            if (store.data){
               store.sortCountries()
            }
         }
      }
      getData()
   })


</script>


<style>
   #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
   body:not(.tab-user) button:focus,
   body:not(.tab-user) input:focus,
   body:not(.tab-user) select:focus,
   body:not(.tab-user) textarea:focus {
      outline: none;
   }
   header{
      box-shadow: 0px 2px 4px 0px rgba(0,0,0,.0562);
   }
   input {
      box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);

   }
</style>
