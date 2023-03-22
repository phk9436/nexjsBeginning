import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/About">
          <a>about</a>
        </Link>
      </nav>
      <style jsx>{`
      nav {
        background-color: tomato;
      }
    `}</style>
    </>
  );
}

export default Navbar;
