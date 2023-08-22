import { Routes, Route, Navigate } from "react-router-dom";
import Index from "../pages/Index";
import Contact from "../pages/Contact";
import Register from "../pages/Register/Index";
import DashboardLayout from '../layouts/dashboard';
import DashboardApp from '../pages/DashboardApp';
import ListUsers from "../pages/Users/ListAll";

export default function Router() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Navigate to="/dashboard/app" replace />} />
        <Route path="app" element={<DashboardApp />} />
        <Route path="users" element={<ListUsers />} />


        <Route path="awards" element={<p>Prêmios</p>} />
        <Route path="awards/:id" element={<p>Prêmio</p>} />

        <Route path="players" element={<p>Jogadores</p>} />
        <Route path="players/:id" element={<p>Jogador</p>} />

        <Route path="cards" element={<p>Cartões</p>} />
        <Route path="cards/:id" element={<p>Cartão</p>} />

        <Route path="classification" element={<p>Classificação</p>} />
        <Route path="classification/:id" element={<p>Classificações</p>} />

        <Route path="coaches" element={<p>Treinadores</p>} />
        <Route path="coaches/:id" element={<p>Treinador</p>} />

        <Route path="teams" element={<p>Equipes</p>} />
        <Route path="teams/:id" element={<p>Equipe</p>} />

        <Route path="games" element={<p>Jogos</p>} />
        <Route path="games/:id" element={<p>Jogo</p>} />

        <Route path="championships" element={<p>Campeonatos</p>} />
        <Route path="championships/:id" element={<p>Campeonato</p>} />

        <Route path="regulations" element={<p>Regulamentos</p>} />
        <Route path="regulations/:id" element={<p>Regulamento</p>} />

        <Route path="referees" element={<p>Árbitros</p>} />
        <Route path="referees/:id" element={<p>Árbitro</p>} />

        <Route path="stadiums" element={<p>Estádios</p>} />
        <Route path="stadiums/id:" element={<p>Estádio</p>} />

        <Route path="users" element={<p>Usuários</p>} />
        <Route path="users/:id" element={<p>Usuário</p>} />

        <Route path="workspaces" element={<p>Espaços de trabalho</p>} />
        <Route path="workspaces/:id" element={<p>Espaço de trabalho</p>} />


      </Route>
      <Route path="/" element={<Index />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/registrar-workspace" element={<Register />} />
    </Routes>
  );
}
