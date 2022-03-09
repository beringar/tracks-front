import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/montserrat-alternates/400.css";
import "@fontsource/montserrat-alternates/700.css";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
