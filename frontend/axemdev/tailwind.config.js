/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blackaxem: "#0F0F0F",
      grayaxem: "#232D3F",
      darkgreenaxem: "#005B41",
      lightgreenaxem: "#008170",
      white: "#ffffff",
    },
    fontFamily: {
      axem: ["Montserrat", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};
