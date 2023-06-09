/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat, Roboto"]
    },
    extend: {
      colors: {
        "midnight-800": "#000d1a",
        "midnight-100": "#0068D0",
        "midnight-700": "#001c2e",
        "midnight-500": "#0B263C",
        "gold-500": "#D9AD5B",
        "gold-700": "#9A8452"
      }
    },
  },
  plugins: [],
}
