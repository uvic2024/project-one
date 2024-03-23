import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './assets/Components/Header/Header'
import BelowNav from './assets/Components/BelowNav/BelowNav'
import Hero from './assets/Components/Hero/Hero'
import TrustPilot from './assets/Components/TrustPilot/TrustPilot'
import Services from './assets/Components/Services/Services'
import Testimonials from './assets/Components/Testimonials/Testimonials'
import Footer from './assets/Components/Footer/Footer'
import Form from './assets/Components/Form/Form'
import BelowTest from './assets/Components/BelowTest/BelowTest'
import Menu from './assets/Components/Menu/Menu'
import Carousel from './assets/Components/Carousel/Carousel'
import FAQS from './assets/Components/FAQS/FAQS'
import Contact from './assets/Components/Contact/Contact'

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <Router>
      {menu && <Menu setMenu={setMenu} />}
      <Header setMenu={setMenu} menu={menu} />
      <Routes>
        <Route path='/' element={
          <>
            <BelowNav />
            <Hero />
            <TrustPilot />
            <Testimonials />
            <Services />
            <Carousel />
            <FAQS />
          </>
        } />
        <Route path='/application-form/:title' element={<Form countryog='' />} />
        <Route path='/canadian-form' element={<Form countryog='Canada' />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
