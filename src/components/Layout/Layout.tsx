import NavBar from "../NavBar/NavBar";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import NavBarMobile from "../NavBarMobile/NavBarMobile";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Tracks App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Tracks App Upload your best GPX tracks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container maxW="container.lg" pt={4} mb="100px">
        {children}
      </Container>
      <NavBarMobile />
    </>
  );
};

export default Layout;
