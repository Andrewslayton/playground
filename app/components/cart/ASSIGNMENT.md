# Shopping cart and order summary

Build a React web cart using the six mock products in products.ts.
Implementation is yours; the files contain only fixtures, types, and scaffolding.

## Requirements

1. Display products with name, price, and Add to cart button.
2. Add a product at quantity 1. Adding it again increases its quantity without creating a duplicate row.
3. Increase and decrease quantities. Minimum quantity is 1; disable decrease at 1.
4. Provide a separate Remove button.
5. Display each line total, total item count (sum of quantities), and subtotal.
6. Format displayed money to two decimal places. No tax, payment, or checkout is needed.
7. Display an empty-cart message when appropriate.
8. Keep cart state in ShoppingCart and send values/callbacks to child components.

## Files and functions

- ShoppingCart.tsx: ShoppingCart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart.
- ProductCard.tsx: ProductCard.
- CartRow.tsx: CartRow.
- OrderSummary.tsx: OrderSummary.
- types.ts: Product and CartItem contracts.
- products.ts: supplied fixtures.
- ../../cart/page.tsx: connected /cart route.

## Work in stages

First display products. Then implement adding one product and rendering its cart row.
Next handle repeated adds, quantity changes, removal, and derived totals.
Keep calculations working normally before adding memoization.

## Memoization practice

1. Use useMemo to cache the subtotal calculation after the cart works.
2. Choose dependencies based on what the calculation reads.
3. Add unrelated state to show/hide static delivery information.
4. Observe whether the calculation runs when delivery visibility changes versus when the cart changes.
5. Explain why this small cart may not need memoization for speed even though it is useful practice.
6. Later, explore React.memo for CartRow and useCallback for parent handlers.

## Manual checks

- Empty cart: zero items, zero subtotal, and empty message.
- Add the same headphones twice: one cart row, quantity 2, subtotal 159.98.
- Add a mouse: total count 3, subtotal 184.97.
- Decrease headphones once: total count 2, subtotal 104.98.
- Decrease at quantity 1: quantity stays 1.
- Remove every item: return to the empty state.

Interview questions: Why keep state in the parent? Why derive totals instead of
storing them separately? What does useMemo cache? When will it recalculate?
