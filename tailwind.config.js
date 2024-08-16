/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#f1c40f",
        },
        fontFamily: {
          // cBold: "ClashDisplay-Bold",
          // cRegular: "ClashDisplay-Regular",

cExtralight: "ClashDisplay-Extralight",
cLight: "ClashDisplay-Light",
cRegular: "ClashDisplay-Regular",
cMedium: "ClashDisplay-Medium",
cSemibold: "ClashDisplay-Semibold",
cBold: "ClashDisplay-Bold",
cVariable : "ClashDisplay-Variable",
          
        }
    },
  },
  plugins: [],
}

