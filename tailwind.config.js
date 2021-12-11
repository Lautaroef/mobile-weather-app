module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {    
      fontSize : {
        custom1 : '22px'
      }, 
      borderRadius : {
        '10px' : '10px'
      },
      color: {
        gray : 'rgba(0,0,0,0.8)'
      },
      spacing : {
        "4px" : '4px'
      }
  },
    container : {
      center: true,
    },
    fontFamily : {
      'Poppins': 'Poppins, sans-serif'
    },
    minHeight: {
      '3/4' : '75%',
      '10/12' : '83%',
      '11/12' : '90%'
    }, 
    flex : {
      "flex-columns" : "flex flex-col items-center justify-center"
    }
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
