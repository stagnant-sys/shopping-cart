import { React } from "react";


const CartItem = (props) => {
  const handleChange = (e) => {
    props.updateQty(props.id, e.target.value);
  }

  return (
    <div className="cart-item">
      <div>{props.product}</div>
      <div>
        <button onClick={() => props.decrementQty(props.id)}>-</button>
        <input type="number" value={props.quantity} onChange={handleChange} />
        <button onClick={() => props.incrementQty(props.id)}>+</button>
      </div>
      <div>{props.price}</div>
      <div>{props.totalPrice}</div>
    </div>
  )
}

export default CartItem;