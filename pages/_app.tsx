import React, { Component } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Iprops {
  Component: Function;
  pageProps: Object;
}

const queryClient = new QueryClient();

function App({ Component, pageProps }: Iprops) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
