/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js'
],
  theme: {
    extend: {
      colors:{
        primary:"#C7AF8B"
      }
    },
  },

  plugins: [
     require('flowbite/plugin')],
}

