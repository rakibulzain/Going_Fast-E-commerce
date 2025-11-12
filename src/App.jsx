import './App.css'
import Navbar from './Component/Page/Navbar.jsx'
import Hero from './Component/Page/Hero.jsx'
import Mens from './Component/Page/Feature.jsx'
import Card from './Component/Page/Card.jsx'
import Counter from './Component/Page/Counter.jsx'
import Example from './Component/Page/Example.jsx'
import Footer from './Component/Footer.jsx'
import Feature from './Component/Page/Feature.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './Component/Page/Home.jsx'


export default function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<div>catagorys Page</div>} />
        <Route path='/contact' element={<div>conyact page</div>} />
        <Route path='/deatils' element={<div>this is card deatils</div>} />
      </Routes>
      <Footer />
    </Router>

  )
}
