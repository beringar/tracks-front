import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/montserrat-alternates/400.css";
import "@fontsource/montserrat-alternates/700.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Layout />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
