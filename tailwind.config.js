/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: { 
      colors: {
      'custom-gray': '#363C43',
      'custom-button': '#1D1D1D',
      'custom-text': '#FFFFFF',
      'custom-text-light' : 'white'
    },},
  },
  plugins: [],
}

