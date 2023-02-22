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
        footer: "#ececef",
      },
    },
  },
  plugins: [],
};
