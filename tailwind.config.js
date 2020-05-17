module.exports = {
  theme: {
    screens: {
      lg: { max: "975px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "700px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "480px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
