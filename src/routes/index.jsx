import { Routes, Route, Navigate } from "react-router-dom";
import Index from "../pages/Index";
import Contact from "../pages/Contact";
import Register from "../pages/Register/Index";
import DashboardLayout from '../layouts/dashboard';
import DashboardApp from '../pages/DashboardApp';

export default function Router() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Navigate to="/dashboard/app" replace />} />
        <Route path="app" element={<DashboardApp />} />
      </Route>
      <Route path="/" element={<Index />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/registrar-workspace" element={<Register />} />
    </Routes>
  );
}
