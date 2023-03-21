import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
    const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a style={{color: router.pathname === "/" ? "red" : "blue"}}>home</a>
      </Link>
      <Link href="/About">
        <a style={{color: router.pathname === "/About" ? "red" : "blue"}}>about</a>
      </Link>
    </nav>
  );
}

export default Navbar;
