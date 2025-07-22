import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Product from './pages/products/products';
import { products } from './helpers.js/cardsdata';



function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <Product products={products}/>
        <Footer/>
      </div>
    </>
  )
}

export default App
