// src/context/cart/cartstate.js
import React, { useState } from 'react';
import cartcontext from './cartcontext';

const Cartstate = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <cartcontext.Provider value={{ cartCount, addToCart }}>
      {children}
    </cartcontext.Provider>
  );
};

export default Cartstate;
