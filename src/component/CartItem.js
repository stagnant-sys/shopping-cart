import { React } from "react";


const CartItem = (props) => {
  const handleChange = (e) => {
    if (e.target.value > 0 || e.target.value) {
      props.updateQty(props.id, e.target.value);
      console.log(props.quantity)
    }
  }

  if (props.quantity > 0) {
  return (
    <div className="cart-item">
      <div>{props.product}</div>
      <div>
        <button onClick={() => props.decrementQty(props.id)}>-</button>
        <input type="number" min="0" value={props.quantity} onChange={handleChange} />
        <button onClick={() => props.incrementQty(props.id)}>+</button>
      </div>
      <div>{props.price}</div>
      <div>{props.totalPrice}</div>
    </div>
  )
  }
}

export default CartItem;