/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      notLast: "not-last",
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(122deg, #10223e 0%, #10223e 54%, #274b77 100%) !important;",
      },
      width: {
        defaultwidth: "90%",
        widthmenu: "60%",
      },
      maxWidth: {
        mwidth1: "1600px",
        mwidth2: "1500px",
        mediumwidth: "1300px",
        width1000: "1000px",
        widthCard550: "550px",
        widthCard450: "450px",
        widthCard350: "350px",
        widthCard300: "300px",
        widthCard: "600px",
        widthCard1: "700px",
      },
      maxHeight: {
        h750: "750px",
        h400: "400px",
      },
      colors: {
        purple: "#6E7AA8",
        darkBlue: "#0D1423",
        lightBlue: "#8CAEFC",
        gray: "#F7F9FD",
        white: "#ffffff",
        black: "#000000",
      },
      flexBasis: {
        "30": "30%",
        "33": "33%",
        "16": "16%",
        "48": "48%",
        "2/7": "52%",
        "3/7": "35%",
        "10": "10%",
        "28": "32%",
        "70": "70%",
        "8": "9.8%",
      },
    },
  },
  plugins: [],
};
