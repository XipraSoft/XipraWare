import React, { useContext, useEffect, useState } from 'react';
import './navbar.css';
import cartcontext from '../../context/cart/cartcontext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItems } = useContext(cartcontext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/"><img src="/logo.png" alt="logo" width="125px" /></Link>
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <ul id="MenuItems">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/account" onClick={() => setMenuOpen(false)}>Account</Link></li>
        </ul>
      </nav>

      <div className="right-section">
        <Link to="/cart" className="cart-link">
          <img src="/cart.png" width="30px" height="30px" alt="cart" />
          <span className="cart-count">{cartCount}</span>
        </Link>

        <img
          src="/menu.png"
          className="menu-icon"
          alt="menu"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
