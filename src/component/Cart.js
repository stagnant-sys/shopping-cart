import { React } from "react";
import CartItem from "./CartItem";
import "../style.css";

const Cart = ({ cartContent, incrementQty, decrementQty, updateQty, closeCart }) => {
  const contentList = cartContent.map(el => {
    if (el.quantity) {
    return (
      <CartItem 
        key={el.id}
        id={el.id}
        product={el.product}
        image={el.image}
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
      <button className="cart__close-button"onClick={closeCart}>X</button>
      <h2>Cart</h2>
      <div>{contentList}</div>
      <div className="cart-order">
        <div style={{fontWeight: 700}}>Total: CHF {totalSum.toFixed(2)}.-</div>
        <button>Passer la commande</button>
      </div>
    </div>
  )
}

export default Cart;