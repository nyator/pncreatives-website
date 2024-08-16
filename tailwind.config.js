/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#231F20",
      secondary: {
        default: "#F9CB10",
        yray: "#FFDB4B",
      },
      blue: "#119EEE",
      gray: "#EBEBEB",
    },
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
      borderRadius: {
        '5xl': '50px',
      }
    },
  },
  plugins: [],
};
