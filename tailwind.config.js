/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen:"#1AFF00",
      },
      fontFamily:{
        array:['Array'],
        ibm:['IBM Plex Mono'],
        neuo:['Neue Haas Grotesk Display Pro'],
      }
    },
  },
  plugins: [],
}