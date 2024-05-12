/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        neutral_1: "#0DB760",
        neutral_2: "#000000",
        neutral_3: "#FF0000",
        neutral_4: "#FFFFFF",
        neutral_5: "#FE8B75",
      },
    },
  },
  plugins: [],
};
