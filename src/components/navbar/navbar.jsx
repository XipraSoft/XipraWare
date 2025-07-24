// src/components/navbar/navbar.jsx
import React, { useContext } from 'react';
import './navbar.css'; // ✅ correct path relative to navbar.jsx
import cartcontext from '../../context/cart/cartcontext';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { cartCount } = useContext(cartcontext);

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/"><img src="logo.png" alt="logo" width="125px" /></a>
      </div>

      <nav>
        <ul id="MenuItems">
          <Link to="/"><li><a href="/">Home</a></li></Link>
          <Link to="/products"><li><a href="/products">Products</a></li></Link>
          <Link to="/about"><li><a href="/about">About</a></li></Link>
          <Link to="/contact"><li><a href="/contact">Contact</a></li></Link>
          <Link to="/account"><li><a href="/account">Account</a></li></Link>
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
