
import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Páginas públicas
import Home from "./components/pages/Home";
import LoginAdmin from "./components/pages/LoginAdmin";
import LoginUsuario from "./components/pages/LoginUsuario";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";

// Páginas do sistema
import Pesquisar from "./components/pages/Pesquisar";
import Projects from "./components/pages/Projects";
import Escopo from "./components/pages/Escopo";
import Chat from "./components/pages/Chat";
import Tarefas from "./components/pages/Tarefas";
import CreateProject from "./components/pages/CreateProject";
import Permission from "./components/pages/Permission";
import Actividades from "./components/pages/Actividades";
import Guia from "./components/pages/Guia";
import Team from "./components/pages/Team";
import Configuracoes from "./components/pages/Configuracoes";
import NovaTarefa from "./components/pages/NovaTarefa";
import Relatorios from "./components/pages/Relatorios";
import DashboardPage from "./components/pages/DashboardPage";

function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      {/* LOGIN */}
      <Route path="/login-admin" element={<LoginAdmin />} />
      <Route path="/login-usuario" element={<LoginUsuario />} />

      {/* ROTAS COM DASHBOARD */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Pesquisar />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/escopo" element={<Escopo />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/permission" element={<Permission />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/guia" element={<Guia />} />
        <Route path="/team" element={<Team />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/nova-tarefa" element={<NovaTarefa />} />
        <Route path="/relatorio" element={<Relatorios />} />
        <Route path="/dashboard-page" element={<DashboardPage />} />
      </Route>

    </Routes>
  );
}

export default App;