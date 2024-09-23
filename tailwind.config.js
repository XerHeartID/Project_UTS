/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bgdark': '#242424',
      },
      screens: {
        'tm': '540px',
      },  
    },
  },
  plugins: [],
}

