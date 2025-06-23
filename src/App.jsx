import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Services from './pages/Services'
import AboutPage from './pages/AboutPage'
// import KamakhyaFlicksRegistration from './components/common/KamakhyaFlicksRegistration'
import Register from './pages/Register'

function App() {
  
  return (
    <>
    <Navbar/>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
    </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
