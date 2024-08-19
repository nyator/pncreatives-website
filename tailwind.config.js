/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "520px",
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
        clamp_name: "clamp(15px, 2vw, 60px)",
        clamp_desc: "clamp(10px, 1vw, 25px)",
        clamp_text: "clamp(6px, 2vw, 19px)",
      },
      width: {
        'myspace': '49%',
      }
    },
  },
  plugins: [],
};
