const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const brandColors = {
  brand: {
    50: "#e9edf0",
    100: "#d3dae1",
    200: "#bcc8d2",
    300: "#90a4b4",
    400: "#647f95",
    500: "#4d6d86",
    600: "#375a77",
    700: "#214868",
    800: "#1a3a53",
    900: "#112434",
    DEFAULT: "#214868",
  },
  accent: {
    50: "#f8fcf5",
    100: "#f2f8eb",
    200: "#deeecd",
    300: "#c9e4af",
    400: "#a1d073",
    500: "#79bc37",
    600: "#6da932",
    700: "#5b8d29",
    800: "#497121",
    900: "#3b5c1b",
    DEFAULT: "#79bc37",
  },
};

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      lime: brandColors.accent,
      blue: brandColors.brand,
      indigo: colors.blue,
      ...brandColors,
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        none: "0",
        xs: ".25rem",
        sm: ".5rem",
        DEFAULT: "1rem",
        lg: "2rem",
        full: "9999px",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["hover", "focus", "group-hover"],
      borderStyle: ["hover", "focus", "group-hover"],
      borderWidth: ["hover", "focus", "group-hover"],
      fontWeight: ["hover", "focus", "group-hover"],
      gradientColorStops: ["hover", "focus", "group-hover"],
      textColor: ["hover", "focus", "group-hover"],
      opacity: ["disabled"],
    },
  },
};
