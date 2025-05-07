import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    colors: {
      blue: "#120720",
      lightBlue: "#378FF6",
      darkBlue: "#032CFF",
      gray: "#7E99A3",
      lightGray: "#A5BFCC",
      darkGray: "#4C585B",
      white: "#FFFFFF",
      black: "#000000",
      pink: "#E019E4",
      lightPink: "#F237F6",
      darkPink: "#790A7B",
      orange: "#FFB22C",
      lightOrange: "#F3C623",
      darkOrange: "#FA812F",
    },
    fontFamily: {
      body: ['"Josefin Sans"', "sans-serif"],
      special: ['"Roboto"', "sans-serif"],
    },
  },
});

 
