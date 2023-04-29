import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Pizza from 'pages/Pizza/Pizza';
import Cart from 'pages/Cart/Cart';
import Home from 'pages/Home/Home';
import Footer from './Footer/Footer';

export const App = () => {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || {});

  const getCartItemCount = useCallback(() => {
    const cartItemCount = cartItems.length;
    localStorage.setItem('cartItemCount', cartItemCount);
    return cartItemCount;
  }, [cartItems]);

  const getCartItemQuantity = useCallback(pizza => cart[pizza.id] || 0, [cart]);

  const updateCart = useCallback((pizza, quantity) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (quantity <= 0) {
        delete newCart[pizza.id];
      } else {
        newCart[pizza.id] = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  const handleAddToCart = useCallback((pizza) => {
    setCartItems((prevCartItems) => [...prevCartItems, pizza]);
    updateCart(pizza, getCartItemQuantity(pizza) + 1);
  }, [getCartItemQuantity, updateCart]);

  const handleRemoveFromCart = useCallback((pizza) => {
    updateCart(pizza, getCartItemQuantity(pizza) - 1);
    setCartItems((prevCartItems) => {
      const index = prevCartItems.findIndex((cartItem) => cartItem.id === pizza.id);
      if (index < 0) return prevCartItems;
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  }, [getCartItemQuantity, updateCart]);

  useEffect(() => {
    let price = 0;
    cartItems.forEach((item) => {
      price += item.price;
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setTotalPrice(price);
  }, [cartItems]);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleClearCart = useCallback(() => {
    localStorage.removeItem('cart');
    localStorage.removeItem('cartItems');
    setCart({});
    setCartItems([]);
  }, []);

  const removeFromCartItem = useCallback((item) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.id] > 0) {
        newCart[item.id] = -1;
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
      return newCart;
    });
  }, []);

  return (
    <Router basename="/pizza-style-test-task">
      <Header cartItemCount={getCartItemCount()} />
      <Routes>
        <Route path="/" element={<Pizza handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} totalPrice={totalPrice} handleClearCart={handleClearCart} removeFromCartItem={removeFromCartItem} />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </Router>
  );
};
