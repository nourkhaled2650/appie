/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eef1f6",
        secondary: "#0e1133",
        buttons: "#ff4466",
        footer: "#ececef",
      },
    },
  },
  plugins: [],
};
