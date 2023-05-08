import React from "react";
import ArticleOverview from "../component/ArticleOverview";
import database from "../database";
import "../style.css";

const Shop = ({addToCart}) => {
  const articlesList = database.map(el => {
    return (
      <ArticleOverview 
        key={el.id}
        id={el.id}
        name={el.name}
        description={el.description}
        image={el.image}
        price={el.price}
        onShop={addToCart}
      />
    )
  })

  return (
    <div>
      <div className="articles-list">
        {articlesList}
      </div>
    </div>
  )
}

export default Shop;