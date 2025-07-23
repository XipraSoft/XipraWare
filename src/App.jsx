// src/App.jsx
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { products } from './helpers.js/cardsdata';
import Cart from './pages/cart/cart';
import Cartstate from './context/cart/cartstate'; // ❗️import default
import Landing from './pages/landing/landing';

function App() {
  return (
    <Cartstate>
      <Navbar />
      <Landing products={products} />
      <Footer />
    </Cartstate>
  );
}

export default App;

