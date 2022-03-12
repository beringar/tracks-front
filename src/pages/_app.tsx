import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/montserrat-alternates/400.css";
import "@fontsource/montserrat-alternates/700.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import theme from "../theme";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import NavBarMobile from "../components/NavBarMobile";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Layout />
        <ScaleFade key={router.route} initialScale={0.9} in={true}>
          <Component {...pageProps} />
        </ScaleFade>
        <NavBarMobile />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
