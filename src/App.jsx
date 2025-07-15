import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Landing from './pages/landing/landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Landing/>
        <Footer/>
      </div>
    </>
  )
}

export default App
