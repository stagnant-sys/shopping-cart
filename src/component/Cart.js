import { React, useState } from "react";
import CartItem from "./CartItem";
import "../style.css";

const Cart = ({cartContent}) => {
  const contentList = cartContent.map(el => {
    if (el.quantity) {
    return (
      <CartItem 
        product={el.product}
        quantity={el.quantity}
        price={el.price}
        totalPrice={el.totalPrice}
      />
    )}
  });

  const totalSum = cartContent.reduce(function (acc, el) { return acc + parseFloat(el.totalPrice); }, 0);


  return (
    <div className="cart_container">
      <h2>Cart</h2>
      <div>{contentList}</div>
      <div>Total: {totalSum.toFixed(2)}</div>
      <button>Passer la commande</button>
    </div>
  )
}

export default Cart;