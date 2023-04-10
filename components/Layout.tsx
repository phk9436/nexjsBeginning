import React from "react";
import Navbar from "./Navbar";
import Seo from "./Seo";
import { useRouter } from "next/router";

interface Iprops {
  children: React.PropsWithChildren;
}
function Layout({ children }: Iprops) {
  const router = useRouter();
  const path = router.pathname;
  const pathIndex = path.indexOf("/", 2) === -1 ? path.length : path.indexOf("/", 2);
  const title = path.substring(0, pathIndex).replace("/", "");
  return (
    <>
      <Seo title={title || "Home"} />
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
