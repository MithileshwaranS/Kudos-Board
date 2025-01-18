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
        playwrite:['Playwrite GB J Guides'],
      },
      textShadow: {
        customGreen: "0px 0px 19.56px #1AFF00, 0px 0px 410.82px #1AFF00",
    },
  },
  plugins: [
    require("tailwindcss-textshadow"), // Requires `tailwindcss-textshadow` plugin
  ],
}
}