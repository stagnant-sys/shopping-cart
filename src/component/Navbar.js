import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">AI DRINKS</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-links__link">HOME</Link>
        <Link to="/shop" className="navbar-links__link">SHOP</Link>
        <div className="navbar-cart">Cart</div>
      </div>
    </nav>
  )
}

export default Navbar;