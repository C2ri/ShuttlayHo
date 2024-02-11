import type { NextPage } from "next";
import React from "react";
import Head from "next/head";

const Home: NextPage = () => {
  // const code = new URL(window.location.href).searchParams.get("code");

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <h1>안녕하세요</h1>
      </Head>

      <main></main>
    </div>
  );
};

export default Home;
