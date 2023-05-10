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
      id: database[0].id,
      product: database[0].name,
      image: database[0].image,
      quantity: 0,
      price: database[0].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
    {
      id: database[1].id,
      product: database[1].name,
      image: database[1].image,
      quantity: 0,
      price: database[1].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
    {
      id: database[2].id,
      product: database[2].name,
      image: database[2].image,
      quantity: 0,
      price: database[2].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
    {
      id: database[3].id,
      product: database[3].name,
      image: database[3].image,
      quantity: 0,
      price: database[3].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
    {
      id: database[4].id,
      product: database[4].name,
      image: database[4].image,
      quantity: 0,
      price: database[4].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
  ]);


  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  }

  const addToCart = (index) => {
    const updatedArray = cartContent.slice();
    updatedArray.map((el, i) => {
      if (index !== i) {
        return null;
      } else {
        el.quantity = ++el.quantity;
      }
    })
    setCartContent(updatedArray);
  }

  const decrementQty = (id) => {
    const updatedArray = cartContent.slice();
    updatedArray.map((el, i) => {
      if (id !== i) {
        return null;
      } else {
        el.quantity = --el.quantity;
      }
    })
    setCartContent(updatedArray);
  }

  const incrementQty = (id) => {
    const updatedArray = cartContent.slice();
    updatedArray.map((el, i) => {
      if (id !== i) {
        return null;
      } else {
        el.quantity = ++el.quantity;
      }
    })
    setCartContent(updatedArray);
  }

  const updateQty = (id, newValue) => {
    const updatedArray = cartContent.slice();
    updatedArray.map((el, i) => {
      if (id !== i) {
        return null;
      } else if (el.quantity > 0) {
        el.quantity = newValue;
      }
    })
    setCartContent(updatedArray);
  }

  const totalQty = cartContent.reduce(function (acc, el) { return acc + parseFloat(el.quantity); }, 0);

  return (
    <BrowserRouter>
      <div className="background-image"></div>
      <Navbar handleClick={toggleCart} totalQty={totalQty} />
      {cartIsOpen ? 
        <Cart 
          closeCart={toggleCart}
          cartContent={cartContent} 
          decrementQty={decrementQty} 
          incrementQty={incrementQty}
          updateQty={updateQty} 
        /> : 
        null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;