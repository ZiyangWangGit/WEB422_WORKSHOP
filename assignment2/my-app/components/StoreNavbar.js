import Link from "next/link";
//import styles from "@/styles/Home.module.css";
import styles from "@/styles/StoreNavbar.module.css";

export default function StoreNavbar() {
  return (
    
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/detail">PRODUCT DETAIL</Link>
        </li>
      </ul>
    </nav>
    
  );
}
