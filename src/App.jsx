import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Footer/>
      </div>
    </>
  )
}

export default App
