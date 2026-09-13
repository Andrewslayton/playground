import Link from 'next/link';
import ProductCatalog from '../components/catalog/ProductCatalog';

export default function CatalogPage() {
  return (
    <main>
      <nav className="p-4"><Link href="/">Back to user list</Link></nav>
      <ProductCatalog />
    </main>
  );
}
