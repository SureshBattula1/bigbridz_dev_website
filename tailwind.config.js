/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0054A6", // BigBridz blue
          dark: "#003f7a",
          light: "#4d86c7",
        },
        accent: {
          DEFAULT: "#F79A1F", // BigBridz orange
          dark: "#d07c0f",
          light: "#ffd08a",
        },
        navy: {
          DEFAULT: "#001F3F", // Navy blue
          dark: "#001529",
          light: "#003d7a",
        },
        neutral: {
          DEFAULT: "#374151",
        },
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

