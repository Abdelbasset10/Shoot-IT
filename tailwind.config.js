/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors:{
      "shoot-blue":"#3CB9FC",
      "shoot-perple":"#BC4ED8",
      "shoot-perpleDark":"#4C007D",
      "shoot-white":"#FFFFFF",
      "shoot-silver":"#C0C0C0	"
    },
    fontFamily:{
      'shootFont':['Copperplate'-]
    }
  },
  
  plugins: [],
}
