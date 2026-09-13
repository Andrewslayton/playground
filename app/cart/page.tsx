import Link from 'next/link';
import ShoppingCart from '../components/cart/ShoppingCart';

export default function CartPage() {
  return (
    <main>
      <nav className="p-4"><Link href="/">Back to practice home</Link></nav>
      <ShoppingCart />
    </main>
  );
}
