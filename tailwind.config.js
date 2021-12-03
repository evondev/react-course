module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": `linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        )`,
        "secondary-gradient": `linear-gradient(86.88deg, #20e3b2, #2cccff)`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
