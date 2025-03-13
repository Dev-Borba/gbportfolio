/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          500: '#34d399',
          600: '#059669',
        },
        zinc: {
          400: '#a1a1aa',
          800: '#27272a',
          950: '#09090b',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
