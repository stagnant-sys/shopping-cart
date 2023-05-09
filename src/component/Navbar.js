import { React } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Navbar = ({ handleClick, totalQty }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">AI DRINKS</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-links__link">HOME</Link>
        <Link to="/shop" className="navbar-links__link">SHOP</Link>
        <button className="navbar-cart" onClick={handleClick}>Cart ({totalQty})</button>
      </div>
    </nav>
  )
}

export default Navbar;