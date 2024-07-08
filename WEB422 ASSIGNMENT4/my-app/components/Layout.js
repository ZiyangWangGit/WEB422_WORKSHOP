import Link from "next/link";
import { useAtom } from 'jotai';
import { cartListAtom } from '@/store';
import styles from "@/styles/layout.module.css";

export default function Layout(props) {

  const [cartList, setCartList] = useAtom(cartListAtom);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/Dashboard" className={styles.link}>Dashboard</Link>
        <Link href="/Dashboard/preferences" className={styles.link}>Dashboard Preferences</Link>
        <Link href="/products" className={styles.link}>Product</Link>
        <Link href="/cart"className={styles.link}>Shopping Cart <span>({cartList.length})</span></Link>
      </nav>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
}
