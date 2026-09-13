import type { Product } from './types';

// Fictional test fixtures, not live Best Buy inventory or pricing.
const categories = ['Laptops', 'Headphones', 'TVs', 'Gaming', 'Accessories'];

export const products: Product[] = Array.from({ length: 1000 }, (_, index) => ({
  id: `product-${index + 1}`,
  name: `${categories[index % categories.length]} Model ${index + 1}`,
  category: categories[index % categories.length],
  price: ((index * 137) % 200000 + 1999) / 100,
  inStock: index % 4 !== 0,
}));
