/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, php}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'icones': ['Icones']
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
