import NavBar from "../components/NavBar";
import Head from "next/head";

const Layout = () => (
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
  </>
);

export default Layout;
