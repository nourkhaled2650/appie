/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eef1f6",
        secondary: "#0e1133",
        button: "#ff4466",
        hoveredbtn: "#F797AE",
        hoveredbtn2: "#41467a",
        footer: "#ececef",
        icon1: "#30acfb",
        icon2: "#ea4d89",
        icon3: "#3878fa",
        icon4: "#f67842 ",
        icon5: "#6b88f7 ",
        icon6: "#3cb094",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      lineHeight: {
        sm: "1",
        12: "3rem",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
