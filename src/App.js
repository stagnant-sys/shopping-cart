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
      quantity: 0,
      price: database[0].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
    {
      id: database[1].id,
      product: database[1].name,
      quantity: 0,
      price: database[1].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
    {
      id: database[2].id,
      product: database[2].name,
      quantity: 0,
      price: database[2].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
    {
      id: database[3].id,
      product: database[3].name,
      quantity: 0,
      price: database[3].price,
      get totalPrice() {
        return (parseFloat(this.price) * this.quantity).toFixed(2);
      },
    },
    {
      id: database[4].id,
      product: database[4].name,
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
        el.quantity = el.quantity + 1;
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
        el.quantity = el.quantity - 1;
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
        el.quantity = el.quantity + 1;
      }
    })
    setCartContent(updatedArray);
  }

  const updateQty = (id, newValue) => {
    const updatedArray = cartContent.slice();
    updatedArray.map((el, i) => {
      if (id !== i) {
        return null;
      } else {
        el.quantity = newValue;
      }
    })
    setCartContent(updatedArray);
  }

  return (
    <BrowserRouter>
      <Navbar handleClick={toggleCart} />
      {cartIsOpen ? 
        <Cart 
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