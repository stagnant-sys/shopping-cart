import React from "react";
import "../style.css";
import cartIcon from "../img/cart-arrow-down.png";

const ArticleOverview = (props) => {
  return (
    <div className="product-overview">
      <div><img alt="Drink bottle" src={props.image} className="product-overview__image"/></div>
      <div className="product-overview__name">{props.name}</div>
      <div className="product-overview__description">{props.description}</div>
      <div className="product-overview__buy">
        <div className="product-overview__price">CHF {props.price}.-</div>
        <button className="add-to-cart-button" onClick={() => props.onShop(props.id)}><img alt="Ajouter au panier" title="Ajouter au panier" src={cartIcon} /></button>
      </div>
    </div>
  )
}

export default ArticleOverview;