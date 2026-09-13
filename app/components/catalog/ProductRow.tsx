import type { Product } from './types';

type ProductRowProps = {
  product: Product;
  isSaved: boolean;
  onToggleSaved: (productId: string) => void;
};

export default function ProductRow(props: ProductRowProps) {
  return (
    <li className="flex items-center justify-between gap-4 py-4">
      <span>{props.product.name}</span>
      <button
        type="button"
        aria-pressed={props.isSaved}
        onClick={() => props.onToggleSaved(props.product.id)}
        className="rounded border px-4 py-2"
      >
        {props.isSaved ? 'Unsave' : 'Save'}
      </button>
    </li>
  );
}
