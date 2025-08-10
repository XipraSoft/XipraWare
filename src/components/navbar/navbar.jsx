// src/components/navbar/navbar.jsx
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import cartcontext from '../../context/cart/cartcontext';
import './navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(cartcontext);
  const { user, logoutUser, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
       clearCart();
    alert('Logged out!');
    navigate('/account');
  
    
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/"><img src="/logo.png" alt="Logo" /></Link>
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <ul id="MenuItems" className="center-menu">
  <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
  <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
  <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
  <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
</ul>

      </nav>

      <div className="right-section">
        {isAuthenticated ? (
          <>
            <span className="navbar-user">Hi, {user?.name}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/account" className="navbar-user">Account</Link>
        )}

        <Link to="/cart" className="cart-link">
          <img src="/cart.png" alt="Cart" />
          <span className="cart-count">{cartCount}</span>
        </Link>

        <img
          src="/menu.png"
          alt="Menu"
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </div>
  );
};

export default Navbar;
