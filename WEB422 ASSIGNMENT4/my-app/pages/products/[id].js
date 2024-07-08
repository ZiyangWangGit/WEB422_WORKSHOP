import Link from 'next/link';
import { useAtom } from 'jotai';
import { cartListAtom } from '@/store';
import ProductBox from '@/components/ProductBox'; // Assuming ProductBox component is defined

export async function getStaticPaths() {
  // Fetch a list of products IDs from an API
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  // Map the product IDs to the paths
  const paths = products.map(product => ({
    params: { id: product.id.toString() }
  }));

  return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const staticProduct = await res.json();

    return {
      props: {
        staticProducts: [staticProduct] // Ensure staticProducts is an array
      },
      revalidate: 60 * 60 // Optional: Enable ISR with a revalidation period (in seconds)
    };
}

export default function Product({ staticProducts }) {
  const [cartList, setCartList] = useAtom(cartListAtom);

  function addToCart(product) {
    setCartList([...cartList, product]);
    console.log(product);
    console.log("TODO: Add to Cart");
  }

  return (
    <div style={{ flexWrap: "wrap", display: "flex" }}>
      {staticProducts.map(prod => (
        <ProductBox key={prod.id} product={prod} addToCart={addToCart} />
      ))}
    </div>
  );
}
