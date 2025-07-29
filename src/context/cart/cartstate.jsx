import React, { useState } from 'react';
import cartcontext from './cartcontext';

const Cartstate = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { id: productId, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <cartcontext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </cartcontext.Provider>
  );
};

export default Cartstate;
