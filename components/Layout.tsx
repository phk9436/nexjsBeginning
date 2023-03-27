import React from "react";
import Navbar from "./Navbar";
import Seo from "./Seo";

interface Iprops {
  children: React.PropsWithChildren;
}
function Layout({ children }: Iprops) {

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
