import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/montserrat-alternates/400.css";
import "@fontsource/montserrat-alternates/700.css";
import NextNProgress from "nextjs-progressbar";
import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import theme from "../theme";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <ScaleFade key={router.route} initialScale={0.9} in={true}>
          <NextNProgress height={6} options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </ScaleFade>
      </Layout>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
