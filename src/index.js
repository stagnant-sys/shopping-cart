import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const closeCart = () => {
  console.log('hi');
}

root.render(
  <React.StrictMode>
    <App onClick={closeCart}/>
  </React.StrictMode>
);
