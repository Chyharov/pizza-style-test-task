import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Pizza from 'pages/Pizza/Pizza';
import Cart from 'pages/Cart/Cart';
import Home from 'pages/Home/Home';

export const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : {};
  });

  const addToCart = useCallback((item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }, []);

  const removeFromCart = useCallback(() => {
    setCartItems((prevCartItems) => prevCartItems.slice(0, prevCartItems.length - 1));
  }, []);

  const getCartItemCount = useCallback(() => {
    const cartItemCount = cartItems.length;
    localStorage.setItem('cartItemCount', cartItemCount);
    return cartItemCount;
  }, [cartItems]);

  const getCartItemQuantity = useCallback((pizza) => {
    return cart[pizza.id] || 0;
  }, [cart]);

  const handleAddToCart = useCallback((pizza) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[pizza.id] = newCart[pizza.id] ? newCart[pizza.id] + 1 : 1;
      addToCart(pizza);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  }, [addToCart]);

  const handleRemoveFromCart = useCallback((pizza) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[pizza.id] > 0) {
        newCart[pizza.id] -= 1;
        removeFromCart(pizza);
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
      return newCart;
    });
  }, [removeFromCart]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cartItems.forEach((item) => {
      price += item.price;
    });
    setTotalPrice(price);
  }, [cartItems, getCartItemQuantity]);

  function handleClearCart() {
    localStorage.removeItem('cart');
    localStorage.removeItem('cartItems');
    setCart({});
    setCartItems([]);
  }

  const removeFromCartItem = useCallback((item) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.id] > 0) {
        newCart[item.id] = 0;
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
      return newCart;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router basename="/pizza-style-test-task">
      <Header cartItemCount={getCartItemCount()} />
      <Routes>
        <Route path="/" element={<Pizza handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} totalPrice={totalPrice} handleClearCart={handleClearCart} removeFromCartItem={removeFromCartItem}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};
