import type { Product } from './types';

// Fictional products and prices for practice.
export const products: Product[] = [
  { id: 'headphones', name: 'Wireless headphones', price: 79.99 },
  { id: 'keyboard', name: 'Mechanical keyboard', price: 89.99 },
  { id: 'mouse', name: 'Wireless mouse', price: 24.99 },
  { id: 'monitor', name: '27-inch monitor', price: 229.99 },
  { id: 'speaker', name: 'Bluetooth speaker', price: 49.99 },
  { id: 'charger', name: 'USB-C charger', price: 19.99 },
];


//anonymous function prodDict = const -> defines functon ()=>{} immediately 
 export const prodDict = (() =>{
  const toRecord : Record<string,Product> = {};
  products.map((prod)=>{
    toRecord[prod.id]=prod
  })
  return toRecord;
})();


