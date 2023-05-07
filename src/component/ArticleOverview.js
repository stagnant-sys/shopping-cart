import React from "react";
import "../style.css";

const ArticleOverview = (props) => {
  return (
    <div>
      <img alt="Drink bottle" src={props.image} className="product-overview__image"/>
      {props.name}
      {props.description}
      {props.price}
    </div>
  )
}

export default ArticleOverview;