"use client";

import { useMemo, useState } from 'react';
import { products } from './products';
import ProductRow from './ProductRow';

export default function ProductCatalog() {
  const [saved, setSaved] = useState<string[]>([]);
  const [savedButtonOn, setSavedButtonOn] = useState(false);


  function toggleSaved(productId: string) {
    setSaved(previousSaved => {
      const alreadySaved = previousSaved.includes(productId);
      if (alreadySaved) {
        return previousSaved.filter(id => id !== productId);
      } else {
        return [...previousSaved, productId];
      }
    });
  }

  const savedProds : typeof products =  useMemo(() => {
       return products.filter(a => saved.includes(a.id))
   },[saved])

  const visibleProducts = savedButtonOn ? savedProds : products;



  return (
    <section className="mx-auto max-w-3xl p-6">
      <div className ="flexbox col-span-2">
      <h1 className="mb-2 text-2xl font-bold">Product catalog</h1>
  <button
  className = "font-bold"
  onClick={()=>setSavedButtonOn(!savedButtonOn)}>
    filter saved
  </button>
      <p className="mb-4">Saved products: {saved.length}</p>
      <ul aria-label="Product catalog" className="divide-y divide-blue-500">
        {visibleProducts.map(item => (
          <ProductRow
          key={item.id}
          product={item}
          isSaved={saved.includes(item.id)}
          onToggleSaved={toggleSaved}
          />
        ))}
      </ul>
        </div>
    </section>
  );
}
