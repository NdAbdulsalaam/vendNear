/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Paths to all your JSX/TSX files for class names scanning
  ],
  theme: {
    extend: {}, // Customize your theme here if needed
  },
  plugins: [], // You can add Tailwind plugins here like @tailwindcss/forms, @tailwindcss/typography, etc.
}