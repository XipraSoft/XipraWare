// src/components/navbar/navbar.jsx
import React, { useContext } from 'react';
import './navbar.css'; // ✅ correct path relative to navbar.jsx
import cartcontext from '../../context/cart/cartcontext';

const Navbar = () => {
  const { cartCount } = useContext(cartcontext);

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/"><img src="logo.png" alt="logo" width="125px" /></a>
      </div>

      <nav>
        <ul id="MenuItems">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/account">Account</a></li>
        </ul>
      </nav>

      <a href="/cart" className="cart-link">
        <img src="cart.png" width="30px" height="30px" alt="cart" />
        <span className="cart-count">{cartCount}</span>
      </a>

      <img src="menu.png" className="menu-icon" alt="menu" />
    </div>
  );
};

export default Navbar;
