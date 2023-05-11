/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "faux-black-coffee": "#352E2E",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
