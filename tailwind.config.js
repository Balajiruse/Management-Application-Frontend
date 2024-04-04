/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm': '600px',
      'lg': '456px'
    }
  },
  
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}