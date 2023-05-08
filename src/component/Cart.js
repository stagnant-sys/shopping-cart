import React from "react";
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

  return (
    <div className="cart_container">
      <h2>Cart</h2>
      {contentList}
    </div>
  )
}

export default Cart;