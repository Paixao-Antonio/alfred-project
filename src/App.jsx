
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./components/pages/Home"
import LoginAdmin from "./components/pages/LoginAdmin"
import LoginUsuario from "./components/pages/LoginUsuario"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Pesquisar from './components/pages/Pesquisar'

function App() {

  return (

    <div>

      <Routes>

        <Route path="/" element={
          <>

            <Navbar />
            <Home />
            <Footer />

          </>
        }
        />

        <Route path="/login-usuario" element={<LoginUsuario />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/pesquisar" element={<Pesquisar />} />

      </Routes>

    </div>

  )
}

export default App
