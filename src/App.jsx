
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
import Cronograma from "./components/pages/Cronograma";
import Sprints from "./components/pages/Sprints";
import Kanban from "./components/pages/Kanban";
import Recursos from "./components/pages/Recursos";
import Orcamento from "./components/pages/Orcamento";
import Stakeholders from "./components/pages/Stakeholders";
import Riscos from "./components/pages/Riscos";
import Documentos from "./components/pages/Documentos";
import Notificacoes from "./components/pages/Notificacoes";
import AjudaSuporte from "./components/pages/AjudaSuporte";
import CriarSprint from "./components/pages/CriarSprint";
import AdicionarMembro from "./components/pages/AdicionarMembro";
import NovoCronograma from "./components/pages/NovoCronograma";
import AlocarRecursos from "./components/pages/AlocarRecursos";
import NovoRisco from "./components/pages/NovoRisco";
import Auditoria from "./components/pages/Auditoria";

import PublicLayout from "./layouts/PublicLayout";


function App() {
  return (
    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login-admin" element={<LoginUsuario />} />
        <Route path="/login-usuario" element={<LoginAdmin />} />
      </Route>


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
        <Route path="/equipe" element={<Team />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/nova-tarefa" element={<NovaTarefa />} />
        <Route path="/relatorio" element={<Relatorios />} />
        <Route path="/dashboard-page" element={<DashboardPage />} />
        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/sprints" element={<Sprints />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/stakeholders" element={<Stakeholders />} />
        <Route path="/riscos" element={<Riscos />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/suporte" element={<AjudaSuporte />} />
        <Route path="/criar-sprint" element={<CriarSprint />} />
        <Route path="/adicionar-membro" element={<AdicionarMembro />} />
        <Route path="/novo-cronograma" element={<NovoCronograma />} />
        <Route path="/add-recursos" element={<AlocarRecursos />} />
        <Route path="/novo-risco" element={<NovoRisco />} />
        <Route path="/logs" element={<Auditoria />} />

      </Route>

    </Routes>
  );
}

export default App;