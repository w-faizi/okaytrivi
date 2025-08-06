/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'canela': ['Canela', 'serif'],
        'sans': ['Canela', 'ui-sans-serif', 'system-ui'],
        'serif': ['Canela', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
}
