module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Changed the grid design
      gridTemplateColumns: {
        250: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },

    minHeight: {
      // Changed default height for the note
      150: "150px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
