/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B2A49',
          50: '#f0f2f5',
          100: '#d9dee6',
          200: '#b3bccd',
          300: '#8d9bb4',
          400: '#677a9b',
          500: '#1B2A49',
          600: '#16223a',
          700: '#121a2c',
          800: '#0d111d',
          900: '#08090f',
        },
        beige: {
          DEFAULT: '#F5EDE3',
          light: '#F5EDE3',
        },
        gray: {
          neutral: '#7A7A7A',
        },
      },
    },
  },
  plugins: [],
}

