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
import jwt_decode from "jwt-decode";
import { wrapper } from "../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserAction } from "../redux/actions/userActionCreator/userActionCreator";
import { User } from "../types/User";

function MyApp({ Component, pageProps, router }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("userToken");
      if (token) {
        const user: User = await jwt_decode(token);
        dispatch(setUserAction(user));
      }
    })();
  }, [dispatch]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <ScaleFade key={router.route} initialScale={0.9} in={true}>
          <NextNProgress height={8} options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </ScaleFade>
      </Layout>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
