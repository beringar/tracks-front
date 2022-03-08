import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

export interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children, title = "Tracks App" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Tracks App Upload your best GPX tracks"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/">
          <a>My favourite tracks</a>
        </Link>{" "}
        |{" "}
        <Link href="/">
          <a>Add new track</a>
        </Link>{" "}
        |{" "}
        <Link href="/">
          <a>(logged in username with ninot-icon)</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>{`Menu mobile here (to be hidden >= 768px)`}</span>
    </footer>
  </>
);

export default Layout;
