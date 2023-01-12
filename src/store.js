import { reactive, toRaw } from "vue";
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

const fbr = 'Filter by region'

const  store = reactive({
   version: "1.0.00",
   wWidth:width,
   wHeight:height,
   mode:'light',

   toggleMode : () => {
      store.mode = store.mode == 'light' ? 'dark' : 'light'
   },
   
   regions:['Filter by region','Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
   selectedRegion:fbr,
   selectedCountry:null,
   history:[],
   data:undefined,
   filterData:undefined,

   sortCountries: () => {
      store.data.sort((a,b) => {
         return (a['name'].common > b['name'].common) ? 1 : -1
      })
   },

   filterByRegion: () => {
      if (store.selectedRegion.startsWith('Fil')){
         store.filterData = undefined
      } else {
         store.filterData = store.data.map( (item) => {
            if(item.region === store.selectedRegion){
               return item.index
            }
         }).filter(el => el !== undefined)
      }
   },

   getData: () => {
      if (store.filterData ){
         return store.data.filter(item => store.filterData.includes(item.index));
      } else {
         return store.data
      }
   },

   getCountry: (idx = store.selectedCountry) => {
      return store.data.find(item => item.index === idx)
   },
   
   filterByName: (name) => {
      if (store.filterData){
        store.selectedRegion=fbr
      }
      store.filterData = store.data.map((item) => {
         if(item.name.common.toUpperCase().startsWith(name)){
            return item.index
         }
      }).filter(el => el !== undefined)
   },

   format: (n) => {
      return parseInt(n).toLocaleString('en-US')
   },

   capital: (idx) => {
      const c = store.getCountry(idx)
      return c.capital === undefined ? " -- " : c.capital[0]

   },

   filterBorderCountries: () => {
      const rec = store.getCountry()
      if(rec.borders){
         return rec.borders.map((item)=>{
            return store.data.find(el => el.cca3===item).name.common
         })
      }
   },

   findCountryByName: (n) => {
      let idx = store.data.findIndex((el) => {
         return el.name.common === n
      })
      if (idx > -1) {
         store.selectedCountry = store.data[idx].index
         store.history.push(store.selectedCountry)
      }
   },

   reset: () => {
      store.selectedCountry=null
      store.history = []
      store.filterData = undefined
   }
   
})

export default store

