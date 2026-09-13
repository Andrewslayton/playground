"use client";
import { useState, useMemo, useCallback } from "react";
import { Product } from "./types";
import { CartItem } from "./types";
import  { products, prodDict } from "./products"
import  ProductCard  from "./ProductCard"
import CartRow from "./CartRow"
import OrderSummary from "./OrderSummary";
import React from "react";
/* eslint-disable @typescript-eslint/no-unused-vars -- Intentionally unfinished exercise scaffolding. */


const  ShoppingCart = ()=> {
  const [cart, setCart] = useState<CartItem[]>([])




  function addToCart(productId: string) {
    if(cart.some(item => item.productId == productId)){
      increaseQuantity(productId)
    } else {
      setCart((prevCart) => {
        return [...prevCart, {productId : productId , quantity: 1}]
      })
    }
  }

  const increaseQuantity = useCallback((productId: string)=> {
     setCart((prevCart) => {
       return prevCart.map((item) => {
         if (item.productId == productId) {
           return { ...item, quantity: item.quantity + 1 };
         } else {
           return item;
         }
       });
     });
  },[])

  const decreaseQuantity = useCallback((productId: string)=> {
    setCart((prevCart) => {
      return prevCart.map((item)=> {
        if (item.productId == productId && (item.quantity > 0)){
          return {...item, quantity : item.quantity-1}
        }
        else {
          return item
        }
      })
    })
  },[])


  //rewrite functions for useCallBack
  function removeFromCart(productId: string) {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.productId !== productId)
    })
  }

  return (
    <section className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Shopping cart practice</h1>
      <p>Start with app/components/cart/ASSIGNMENT.md.</p>
      <div className ="col-auto max-w-4xl">
         <ul>
          {products.map((item) => (
            <ProductCard
            key={item.id}
            product={item}
            onAddToCart={addToCart}
            />
          ))}
        </ul>
        <ul>

          {cart.map((item)=>  {
            const compare = products.find((filterS) => filterS.id == item.productId)
            if (compare){
              return <CartRow key={item.productId} quantity={item.quantity} product={compare} onDecrease={decreaseQuantity} onIncrease={increaseQuantity} onRemove={removeFromCart}/>
            }
          }
        )
      }
      </ul>
      <ul>
        <OrderSummary
        totalItems={cart.length}
        subtotal={useMemo(()=>cart.reduce((acc,item)=>
        acc += (prodDict[item.productId].price *item.quantity )
        ,0),[cart])}
        />
      </ul>
      </div>

    </section>
  );
}


export default React.memo(ShoppingCart);

