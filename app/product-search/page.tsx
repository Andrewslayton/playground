import Link from 'next/link';
import ProductSearch from '../components/product-search/ProductSearch';

export default function ProductSearchPage() {
  return (
    <main>
      <nav className="p-4"><Link href="/">Back to practice home</Link></nav>
      <ProductSearch />
    </main>
  );
}
