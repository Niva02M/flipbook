/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transformOrigin: {
        left: "left",
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      perspective: {
        1500: "1500px",
      },
    },
  },
  plugins: [],
};
