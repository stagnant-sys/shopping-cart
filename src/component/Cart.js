import { React } from "react";
import CartItem from "./CartItem";
import "../style.css";

const Cart = ({ cartContent, incrementQty, decrementQty, updateQty }) => {
  const contentList = cartContent.map(el => {
    if (el.quantity) {
    return (
      <CartItem 
        key={el.id}
        id={el.id}
        product={el.product}
        quantity={el.quantity}
        price={el.price}
        totalPrice={el.totalPrice}
        decrementQty={decrementQty}
        incrementQty={incrementQty}
        updateQty={updateQty}
      />
    )}
  });

  const totalSum = cartContent.reduce(function (acc, el) { return acc + parseFloat(el.totalPrice); }, 0);


  return (
    <div className="cart_container">
      <h2>Cart</h2>
      <div>{contentList}</div>
      <div style={{fontWeight: 700}}>Total: CHF {totalSum.toFixed(2)}.-</div>
      <button>Passer la commande</button>
    </div>
  )
}

export default Cart;