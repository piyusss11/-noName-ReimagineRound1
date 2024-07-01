/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
    animation: {
      "infinite-scroll-2": "infinite-scroll-2 10s linear infinite",
    },
    keyframes: {
      "infinite-scroll-2": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(100%)" },
      },
    },
  },
  plugins: [],
};