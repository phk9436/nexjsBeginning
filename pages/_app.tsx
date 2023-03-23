import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

interface Iprops {
  Component: Function;
  pageProps: Object;
}

function App({ Component, pageProps }: Iprops) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
