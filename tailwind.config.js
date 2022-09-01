/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Helvetica Neue', 'sans-serif'],
    },
    extend: {
      colors: {
        tesis: {
          50: '#e3e9ee',
          100: '#b9c8d5',
          200: '#8ba4b9',
          300: '#5c7f9c',
          400: '#396387',
          500: '#164872',
          600: '#13416a',
          700: '#10385f',
          800: '#0c3055',
          900: '#062142',
        },
        footer: {
          900: '#d9d9d9'
        }
      }
    }
  },
  plugins: [],
}
