import { extendTheme } from "@chakra-ui/react";

const fonts = {
  mono: `'Menlo', monospace`,
  heading: "Montserrat Alternates, sans-serif",
  body: "Inter, sans-serif",
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});

export default theme;
