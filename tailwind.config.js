/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,ttf}"],
  theme: {
    extend: {
      lineHeight: {
        '64': '64px',
      },
      colors: {
        'gray': '#9093A6',
        'yellow': '#FFE145',
      },
    },
  },
  plugins: [],
}

