/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "890px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
      colors: {
        primary: "#231F20",
        navblack: "#575757",

        secondary: {
          default: "#F9CB10",
          yray: "#FFDB4B",
        },
        blue: "#119EEE",
        gray: "#EBEBEB",
      },
      fontSize: {
        clamp: "clamp(30px, 5vw, 95px)",
        clamp_2: "clamp(8px, 1vw, 30px)",
      },
    },
  },
  plugins: [],
};
