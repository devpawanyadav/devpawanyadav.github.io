/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#1D4ED8',
        accent: '#60A5FA',
        dark: {
          bg: '#111827',
          card: '#1F2937',
          text: '#F3F4F6'
        }
      },
    },
  },
  plugins: [],
}