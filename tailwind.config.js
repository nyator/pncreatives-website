/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cExtralight: "ClashDisplay-Extralight",
      cLight: "ClashDisplay-Light",
      cRegular: "ClashDisplay-Regular",
      cMedium: "ClashDisplay-Medium",
      cSemibold: "ClashDisplay-Semibold",
      cBold: "ClashDisplay-Bold",
      cVariable: "ClashDisplay-Variable",
    },
    extend: {
      colors: {
        primary: "#231F20",
        secondary: {
          default: "#F9CB10",
          yray: "#FFDB4B",
        },
        blue: "#119EEE",
        gray: "#EBEBEB",
      },
      borderRadius: {
        '5xl': '50px',
      }
    },
  },
  plugins: [],
};
