import React from "react";
import Navbar from "./Navbar";
import Seo from "./Seo";
import { useRouter } from "next/router";

interface Iprops {
  children: React.PropsWithChildren;
}
function Layout({ children }: Iprops) {
  const router = useRouter();
  const title = router.pathname.replace("/", "");

  return (
    <>
      <Seo title={title || "Home"} />
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
