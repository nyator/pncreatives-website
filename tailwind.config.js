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
          default: "#ffcc00",
          yray: "#ffdb4b",
        },
        blue: "#119EEE",
        gray: "#EBEBEB",
      },

      backgroundImage: {
        'hero-pattern': "url(../src/assets/images/background.svg)",
      },

      fontSize: {
        clamp: "clamp(30px, 5vw, 95px)",
        clamp_2: "clamp(8px, 1vw, 30px)",
        clamp_name: "clamp(20px, 2vw, 60px)",
        clamp_desc: "clamp(0.8rem, 1vw, 25px)",
        clamp_text: "clamp(0.9rem, 2vw, 1.2rem)",
        clamp_title: "clamp(1.5rem, 5vw, 3.75rem)",
        clamp_items: "clamp(9px, 1vw, 14px)",
      },

      width: {
        'myspace': '47%',
        'clamp': 'clamp(10%, 100vw, 100%)'
      },
      
    },
  },
  plugins: [],
};
