import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Home = () => {
  return (
    <div className="homepage">
      <h2 className="home-text">Découvrez la boisson du futur.</h2>
      <div className="home-pitch">Toutes nos boissons sont élaborées avec l'aide de l'intelligence artificielle.<br /> Les ingrédients qui les composent sont savamment étudiés pour vous apporter bien-être et énergie tout au long de la journée.</div>
      <div className="home-cta">
        <div className="home-image"></div>
        <Link to="/shop">Acheter maintenant</Link>
      </div>
      
    </div>
  )
}

export default Home;