import React, { Component } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

interface Iprops {
  Component: Function;
  pageProps: Object;
}

function App({ Component, pageProps }: Iprops) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
