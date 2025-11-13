import './App.css'
import Navbar from './Component/Page/Navbar.jsx'
import Card from './Component/Page/Card.jsx'
import Footer from './Component/Footer.jsx'
import Feature from './Component/Page/Feature.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './Component/Page/Home.jsx'
import Contact from './Component/Page/Contact.jsx'


export default function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<div>catagorys Page</div>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/deatils' element={<div>this is card deatils</div>} />
      </Routes>
      <Footer />
    </Router>

  )
}
