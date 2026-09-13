import type { Product } from './types';

type ProductCardProps = {
  product: Product;
  onAddToCart: (productId: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Exercise scaffold.
export default function ProductCard(props: ProductCardProps) {


  return (
    <li>
      <span>
        {props.product.name + "    "}
      </span>
      <button className='bg-amber-950 outline-amber-100'
      onClick={()=> props.onAddToCart(props.product.id)}>
        Add to cart
      </button>
    </li>
  );
}

