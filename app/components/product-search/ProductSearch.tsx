"use client";
import {useEffect, useRef, useState} from 'react'
import { searchProducts } from './searchProducts';
import { Product } from './types';
import { useDebouncedValue } from './useDebouncedValue';
import SearchResults from './SearchResults';

export default function ProductSearch() {
  const [searchBar,setSearchBar]= useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const inputRef= useRef(null);

  const debounced = useDebouncedValue(searchBar,400);

  useEffect(()=>{
    const controller = new AbortController();
    searchProducts(debounced,controller.signal)
      .then((data : Product[]) =>{
        if(!controller.signal.aborted)
        setSearchResults(data)

      })
    .catch((error)=>(
      console.error(error)
    ))
  },[debounced])

  return (
    <section className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Debounced product search</h1>
      <p>Start with app/components/product-search/ASSIGNMENT.md.</p>
      <input
      ref= {inputRef}
      placeholder='search products'
      onChange={(event)=>setSearchBar(event.target.value)}
      >
      </input>

      <section>
        <SearchResults
        products={searchResults}
        
        />
      </section>
    </section>
  );
}
