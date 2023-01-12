module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens:{
      'md':'768px',
      'lg':'1050px',
    },
    fontSize: {
      base: '.75rem',
      f13: '.812rem',
      f14: '.875rem',
      f15: '.937rem',
      f16: '1.0rem',
      f17: '1.062rem',
      f18: '1.125rem',
      f19: '1.187rem',
      f20: '1.25rem',
      f21: '1.312rem',
      f22: '1.375rem',
      f23: '1.437rem',
      f24: '1.50rem',
      f25: '1.562rem',
      f26: '1.625rem',
      f27: '1.687rem',
      f28: '1.750rem',
      f29: '1.812rem',
      f30: '1.875rem',
    },
    extend: {
      fontFamily: {
         'nunito':'Nunito Sans'
      },
      boxShadow: {
        custom: '0px 2px 9px rgba(0, 0, 0, 0.0532439)'
        
      },
      colors:{
        dm_bg:'hsl(207, 26%, 17%)',
        dm_element:'hsl(209, 23%, 22%)',
        dm_text:' hsl(0, 0%, 100%)',
        lm_bg:'#F2F2F2',
        lm_element: 'hsl(200, 15%, 8%)',
        lm_text:'#111517',
        lm_input:'hsl(0, 0%, 52%)'


      }
    },
  },
  plugins: [
    //  require('@tailwindcss/forms')({
    //    strategy: 'base', // only generate global styles
    //  }),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio')
  ]
}
