/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': "hsl(75, 94%, 57%)",
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-grey': 'hsl(0, 0%, 20%)',
        'neutral-dark-grey': 'hsl(0, 0%, 12%)',
        'neutral-off-black': 'hsl(0, 0%, 8%)'
      }
    },
  },
  plugins: [],
}