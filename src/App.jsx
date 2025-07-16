import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Landing from './pages/landing/landing';


function App() {
   const [products] = useState(
  Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: "Red Printed T-Shirt",
    price: "$50.00",
    image: `product-${i + 1}.jpg`,
    rating: 4,
  }))
);

  return (
    <>
      <div>
        <Navbar/>
        <Landing products={products}/>
        <Footer/>
      </div>
    </>
  )
}

export default App
