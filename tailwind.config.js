/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#989EA7",
          150: '#919192'
        },
        black: {
          50: '#262626'
        },
        yellow: {
          50: '#BF9001'
        }
      },
      gridTemplateColumns: {
        'filter': '33% 1fr'
      }
    },
  },
  plugins: [],
};
