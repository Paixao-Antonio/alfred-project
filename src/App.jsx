
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./components/pages/Home"
import LoginAdmin from "./components/pages/LoginAdmin"
import LoginUsuario from "./components/pages/LoginUsuario"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (

    <>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-usuario" element={<LoginUsuario />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
      </Routes>

      <Footer />

    </>

  )
}

export default App
