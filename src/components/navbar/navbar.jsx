import React from 'react'
import './navbar.css'

const Navbar = () => {
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
      <a href="/cart"><img src="cart.png" width="30px" height="30px" alt="cart" /></a>
      <img src="menu.png" className="menu-icon" alt="menu" />
    </div>
  )
}

export default Navbar