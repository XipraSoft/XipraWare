import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

import Product from './pages/products/products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Product/>
        <Footer/>
      </div>
    </>
  )
}

export default App
