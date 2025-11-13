import './App.css'
import Navbar from './Component/Page/Navbar.jsx'
import Footer from './Component/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './Component/Page/Home.jsx'
import Contact from './Component/Page/Contact.jsx'
import Categories from './Categories.jsx'



export default function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/deatils' element={<div>this is card deatils</div>} />
      </Routes>
      <Footer />
    </Router>

  )
}
