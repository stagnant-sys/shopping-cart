import React from "react";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div>{props.product}</div>
      <div>{props.quantity}</div>
      <div>{props.price}</div>
      <div>{props.totalPrice}</div>
    </div>
  )
}

export default CartItem;