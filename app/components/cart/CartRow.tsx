import React, { useCallback } from 'react';
import type { Product } from './types';

type CartRowProps = {
  product: Product;
  quantity: number;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Exercise scaffold.
 function CartRow(props: CartRowProps) {
  return(
    <div>
    <ul>{props.product.name + " "} 
      <a>{props.quantity}</a>
      </ul> 
    <button onClick={() => props.onIncrease(props.product.id)}>+1</button>
    <button onClick={() => props.onDecrease(props.product.id)}>-1</button>
    <button onClick={() => props.onRemove(props.product.id)}>remove</button>
  </div>
  )
}

export default React.memo(CartRow);

