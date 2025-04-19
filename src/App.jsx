import './App.css'
import Home from './pages/Home'
import Navbar from './components/common/Navbar.jsx'
import Footer from './components/common/Footer.jsx'
import Services from './pages/Services.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
    <>  
    
      <div className="App ">
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        </Routes>
      <Footer/>
      </div>
    </>
      </Router>
  )
}

export default App
{/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<SingleProject />} />
          <Route path="/events" element={<Events />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<NewsBlogs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}