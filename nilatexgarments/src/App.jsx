import AboutUs from './components/AboutUs'
import Certifications from './components/Certifications'
import Clients from './components/Clients'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Infrastructure from './components/Infrastructure'
import Map from './components/Map'
import Navbar from './components/Navbar'
import Products from './components/Products'
import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Infrastructure />
      {/* <Map /> */}
      <Certifications />
      <Clients />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App