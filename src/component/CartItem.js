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
      <img alt="" src={props.image} />
      <div className="cart-item__product">{props.product}</div>
      <div className="cart-item__quantity">
        <button onClick={() => props.decrementQty(props.id)}>-</button>
        <input type="number" min="0" value={props.quantity} onChange={handleChange} />
        <button onClick={() => props.incrementQty(props.id)}>+</button>
        <div>CHF {props.totalPrice}.-</div>
      </div>
    </div>
  )
  }
}

export default CartItem;