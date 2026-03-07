/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        accent: '#E63946',
        'accent-dark': '#C92E3A',
        secondary: '#333333',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
