/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          580: '#2C6BBF',
          470: "#2A6AB2",
          570: "#32A9DC",
          590: "#288CB2"

           
        },
        gray: {
          450: '#909090',
          350: '#c4c4c4',
          380: '#a6a6a6',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}