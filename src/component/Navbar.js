import { React } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Navbar = ({ handleClick, totalQty }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">A<span style={{color:"#BB86FC"}}>I</span> DRINKS</Link>
      <div className="navbar-links">
        <Link to="/shop" className="navbar-links__link">Shop</Link>
        <button className="navbar-cart" onClick={handleClick}><img alt="Panier" src="./img/cart-outline.png"/> ({totalQty})</button>
      </div>
    </nav>
  )
}

export default Navbar;