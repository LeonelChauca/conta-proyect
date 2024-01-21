/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Login/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    extend: {
      fontFamily:{
        candal:['Candal','sans-serif'],
      },
      colors:{
        main:'#1E3888',
        main3:'#172454',
        main2:'#61A3F9',
        boton:'#F0F0F0',
        botonOk:'#DEB841',
        botonAccept:'#1E3888',
        botonNotOk:'#CD5334'
      }
    },
  },
  plugins: [],
}

