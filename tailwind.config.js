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
          150: "#919192",
          250: "#dcdcdc",
        },
        black: {
          50: "#262626",
        },
        yellow: {
          50: "#BF9001",
        },
      },
      height: {
        hero: "calc(100vh - 56px)",
      },
      fontFamily: {
        "quick-sand": ['"Quicksand",Helvetica,Arial,Lucida,sans-serif'],
      },
      gridTemplateColumns: {
        filter: "33% 1fr",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://equisem.be/wp-content/uploads/2021/05/Defender-3.jpg')",
        "hero-linear":
          "linear-gradient(180deg,rgba(23,24,30,0.55) 0%,rgba(23,24,30,0.77) 100%), url('https://equisem.be/wp-content/uploads/2021/05/Defender-3.jpg')",
      },
    },
  },
  plugins: [],
};
