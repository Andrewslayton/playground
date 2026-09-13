import type { Product } from './types';

// Supplied fictional data; no network or account is required.
const products: Product[] = [
  { id: '1', name: 'Wireless headphones', price: 79.99 },
  { id: '2', name: 'Wired headphones', price: 29.99 },
  { id: '3', name: 'Wireless mouse', price: 24.99 },
  { id: '4', name: 'Mechanical keyboard', price: 89.99 },
  { id: '5', name: 'Gaming monitor', price: 229.99 },
  { id: '6', name: 'Bluetooth speaker', price: 49.99 },
];

// Supplied mock API. Implement request lifecycle handling in your component.
// Single-character queries are deliberately slow to expose stale responses.
export function searchProducts(query: string, signal?: AbortSignal): Promise<Product[]> {
  const normalized = query.trim().toLowerCase();
  const delayMs = normalized.length === 1 ? 1800 : 300;

  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Search cancelled', 'AbortError'));
      return;
    }

    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      if (normalized === 'error') {
        reject(new Error('Mock search failed. Try another query.'));
        return;
      }
      resolve(normalized ? products.filter(product =>
        product.name.toLowerCase().includes(normalized)
      ) : []);
    }, delayMs);

    function onAbort() {
      clearTimeout(timer);
      signal?.removeEventListener('abort', onAbort);
      reject(new DOMException('Search cancelled', 'AbortError'));
    }

    signal?.addEventListener('abort', onAbort, { once: true });
  });
}
