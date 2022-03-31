import NavBar from "../NavBar/NavBar";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import NavBarMobile from "../NavBarMobile/NavBarMobile";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <Head>
        <title>Tracks App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Tracks App</title>
        <meta
          name="description"
          content="Tracks App | Upload your best GPX tracks"
        />

        <meta
          property="og:url"
          content="https://tracks-berenguer-pou.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tracks App" />
        <meta
          property="og:description"
          content="Tracks App | Upload your best GPX tracks"
        />
        <meta
          property="og:image"
          content="https://tracks-berenguer-pou.vercel.app/img/tracks-app.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="tracks-berenguer-pou.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://tracks-berenguer-pou.vercel.app/"
        />
        <meta name="twitter:title" content="Tracks App" />
        <meta
          name="twitter:description"
          content="Tracks App | Upload your best GPX tracks"
        />
        <meta
          name="twitter:image"
          content="https://tracks-berenguer-pou.vercel.app/img/tracks-app.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar user={user} />
      <Container maxW="container.lg" pt={4} mb="100px">
        {children}
      </Container>
      <NavBarMobile user={user} />
    </>
  );
};

export default Layout;
