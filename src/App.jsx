import './App.css'
import Home from './pages/Home'
import Navbar from './components/common/Navbar.jsx'
import Footer from './components/common/Footer.jsx'
function App() {

  return (
    <>  
      <div className="App ">
      <Navbar/>
      <Home />
      <Footer/>
      </div>
    </>
  )
}

export default App
