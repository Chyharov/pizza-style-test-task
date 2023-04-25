import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Pizza from 'pages/Pizza/Pizza';
import Cart from 'pages/Cart/Cart';

export const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Pizza addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};