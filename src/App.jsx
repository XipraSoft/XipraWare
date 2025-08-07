import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { products } from './helpers.js/cardsdata';
import Cart from './pages/cart/cart';
import Cartstate from './context/cart/cartstate'; 
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Account from './pages/account/account';
import Contact from './pages/contact/Contact';
import About from './pages/about/about';
import Product from  './pages/products/products';
import CartPage from './pages/cart/cart';
import Scrolltotop from "./components/scrolltotop/Scrolltotop";
import './App.css'
import ProtectedRoute from './helpers.js/ProtectedRoute.jsx';

function App() {
  return (
   <div style={{ paddingTop: '80px' }}>
   <Cartstate>
      
        <Navbar/>
        <Scrolltotop />
      <Routes>
        <Route path="/" element={<Landing products={products}/>} />
          <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Product products={products} />
          </ProtectedRoute>
        }/>
         
           <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }/>
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
          <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage/>
          </ProtectedRoute>
        }/>
      </Routes>
      <Footer/>
   
    </Cartstate>
    </div>
  );
}

export default App;

