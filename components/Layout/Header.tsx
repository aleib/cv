import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
  title?: string;
};

const Header = ({ title = "Alex Leibhammer - Web Dev - Resume" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <header>
      <nav>
        {/* <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "} */}
      </nav>
    </header>
  </>
);

export default Header;
