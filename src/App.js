import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState } from "react";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import database from "./database";
import "./style.css";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartContent, setCartContent] = useState([
    {
      product: "Boisson 1",
      quantity: 2,
      price: database[0].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
    {
      product: "Boisson 2",
      quantity: 3,
      price: database[1].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
  ]);

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
    console.log(cartIsOpen);
  }

  const addToCart = (index) => {
    const updatedArray = cartContent.slice();
    updatedArray.map((el, i) => {
      if (index !== i) {
        return null;
      } else {
        el.quantity = el.quantity + 1;
      }
    })
    setCartContent(updatedArray);
  }

  return (
    <BrowserRouter>
      <Navbar handleClick={toggleCart} />
      {cartIsOpen ? <Cart cartContent={cartContent} /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={() => addToCart(0)} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;