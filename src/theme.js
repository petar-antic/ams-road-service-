import { extendTheme } from "@chakra-ui/react";

// Colors
const colors = {
  brand: {
    white: "#F8F8F8",
    black: "#141414",
    yellow: "#E29E1E",
    gray: "#C7C8C4",
    lightGray: "#F4F4F4",
    navyBlue: "#183B56",
    darkBlue: "#0D253F",
  },
};

// Fonts
const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Lato', sans-serif`,
};

// Breakpoints
const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

// Text Styles
const textStyles = {
  h1: {
    fontSize: {
      base: "24px",
      sm: "28px",
      lg: "44px",
      xl: "48px",
      "2xl": "54px",
    },
    fontWeight: "extrabold",
    fontFamily: "Poppins, sans-serif",
    lineHeight: "120%",
    color: "brand.black",
  },
  h2: {
    fontSize: {
      base: "32px",
      lg: "46px",
      xl: "40px",
      "2xl": "44px",
    },
    fontWeight: "bold",
    fontFamily: "Lato, sans-serif",
    lineHeight: "150%",
    color: "brand.black",
    borderBottom: "4px solid",
    borderBottomColor: "brand.yellow",
  },
};

// Components
const components = {
  Input: {
    variants: {
      outline: {
        field: {
          _focus: {
            borderColor: "brand.yellow",
            boxShadow: "0 0 0 1px var(--chakra-colors-brand-yellow)",
          },
        },
      },
    },
  },
  Radio: {
    baseStyle: {
      control: {
        _checked: {
          bg: "brand.yellow",
          borderColor: "brand.yellow",
          _hover: {
            bg: "brand.yellow",
            borderColor: "brand.yellow",
          },
        },
        _focus: {
          boxShadow: "0 0 0 2px var(--chakra-colors-brand-yellow)",
        },
      },
    },
  },
};

// Theme configuration
const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  textStyles,
  components,
});

export default theme;
