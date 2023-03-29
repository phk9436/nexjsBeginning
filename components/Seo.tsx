import React from "react";
import Head from "next/head"

interface Iprops {
  title: String;
}

function Seo({ title }: Iprops) {
  return (
    <Head>
      <title>{title} | NextJs</title>
    </Head>
  );
}

export default Seo;
