import React, { useContext, useEffect, useState } from 'react';
import './navbar.css';
import cartcontext from '../../context/cart/cartcontext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItems } = useContext(cartcontext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
        <Link to="/cart"><img src="cart.png" width="30px" height="30px" alt="cart" /></Link>
        <span className="cart-count">{cartCount}</span>
      </a>

      <img src="menu.png" className="menu-icon" alt="menu" />
    </div>
  );
};

export default Navbar;
