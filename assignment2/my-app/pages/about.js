import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import StoreNavbar from '@/components/StoreNavbar';
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>About Seneca</title>
        <meta name="description" content="Discover Seneca - Your premier destination for stylish clothing, trendy bags, and elegant accessories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <StoreNavbar />
        </nav>
      </header>
      <main className={`${styles.main} ${inter.className}`}>

        <div className={`${styles.code}`}>  
          <h1 style={{ color: 'red' }}>About Seneca</h1>

          <section>
            <h2>Company Background</h2>
            <p>
              Seneca is a renowned name in the fashion industry, known for its commitment to delivering stylish and high-quality clothing, bags, and accessories.  Seneca has carved a niche for itself by blending elegance with everyday comfort, catering to fashion-forward individuals worldwide.
            </p>
          </section>
          <br/>  <br/>

          <section>
            <h2>Our Products</h2>
            <h4>Clothing</h4>
            <p>
              Our clothing collection at Seneca embodies sophistication and versatility. From timeless classics to contemporary trends, each piece is meticulously crafted to ensure both style and comfort. Whether you're dressing for a formal event or seeking casual wear for everyday use, Seneca offers a range of options that cater to every occasion and preference.
            </p><br/>

            <h4>Bags</h4>
            <p>
              Discover the perfect companion for your outfit with Seneca's collection of bags. Designed with practicality and style in mind, our bags range from chic handbags to functional backpacks and elegant totes. Each bag combines craftsmanship with modern aesthetics, making it an essential accessory for any fashion enthusiast.
            </p><br/>

            <h4>Rings</h4>
            <p>
              Elevate your look with Seneca's exquisite collection of rings. Crafted with attention to detail and using quality materials, our rings are designed to make a statement. Whether you prefer minimalist designs or bold, eye-catching pieces, Seneca offers a variety of options to suit your personal style and occasion.
            </p>
          </section>
          <br/>  <br/>

          <section>
            <h2>Our Commitment</h2>
            <p>
              At Seneca, we are committed to not only providing exceptional products but also ensuring a seamless shopping experience for our customers. Our dedication to quality, innovation, and customer satisfaction drives everything we do, making Seneca a trusted destination for fashion enthusiasts seeking style and substance.
            </p>
          </section>
          <br/>  <br/>
        </div>

      </main>
    </>
  );
}
