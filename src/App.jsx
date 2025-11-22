import './App.css'
import Navbar from './Component/Page/Navbar.jsx'
import Footer from './Component/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './Component/Page/Home.jsx'
import Contact from './Component/Page/Contact.jsx'
import Feature from './Component/Page/Feature.jsx'
import MensShoes from './Component/Page/MensShoes.jsx'
import WomenShoes from './Component/Page/WomenShoes.jsx'
import KidsShoes from './Component/Page/KidsShoes.jsx'
import ProductDetails from './Component/Page/ProductDetails.jsx'




export default function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/all' element={<Feature/>}/>
        <Route path='/mens-shoes' element={<MensShoes/>}/>
        <Route path='/women-shoes' element={<WomenShoes/>}/>
        <Route path='/kids-shoes' element={<KidsShoes/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>

        
      </Routes>
      <Footer />
    </Router>

  )
}
