import Link from "next/link";
import { useAtom } from 'jotai';
import { cartListAtom } from '@/store';

export default function ProductBox(props) {
  const [cartList, setCartList] = useAtom(cartListAtom);
  const { product } = props;

  function addToCart(product) {
    setCartList([...cartList, product]);
    console.log(product);
    console.log("TODO: Add to Cart");
  }

  return (
    <div style={{ margin: "30px", flexGrow: "1" }}>
      <div style={{ maxWidth: "300px" }}>
        <h3 style={{ width: "200px", height: "100px" }}>{product.title}</h3>
        <img src={product.image} style={{ width: "200px", height: "200px"}} /><br /><br />
        <p>{product.description}</p><br />
        <strong>${product.price.toFixed(2)}</strong><br /><br />
        <Link href={`/products/${product.id}`}>
          <button>View Details</button>
        </Link>&nbsp;&nbsp;
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
