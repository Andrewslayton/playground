import type { Product } from './types';

type SearchResultsProps = {
  products: Product[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Exercise scaffold.
export default function SearchResults(props: SearchResultsProps) {
return (
 <div>
  <ul>
    {props.products.map(item=>(
      <li key={item.id}> {item.name} </li>
    ))}
  </ul>
 </div>
)}
