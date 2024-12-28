/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#1a56db',
        secondary: '#1e293b',
        // Dark mode specific colors will be handled by dark: prefix
      },
    },
  },
  plugins: [],
}
