// src/App.jsx
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { products } from './helpers.js/cardsdata';
import Cart from './pages/cart/cart';
import Cartstate from './context/cart/cartstate'; // ❗️import default
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Account from './pages/account/account';
import Contact from './pages/contact/Contact';
import About from './pages/about/about';
import Product from  './pages/products/products';
import './App.css'

function App() {
  return (
    <Cartstate>
      
        <Navbar/>
      <Routes>
        <Route path="/" element={<Landing products={products}/>} />
        <Route path="/products" element={<Product products={products}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
   
    </Cartstate>
  );
}

export default App;

