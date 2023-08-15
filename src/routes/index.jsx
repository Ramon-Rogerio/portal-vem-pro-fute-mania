import { Routes as Routers, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Contact from '../pages/Contact';
import Register from '../pages/Register/Index';
import Header from '../components/organisms/Admin';
import Admin from '../components/organisms/Admin';

export default function Routes() {
    return (
        <Routers>
            <Route path="/" element={<Index />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/registrar-workspace" element={<Register />} />
            <Route path="/gestor" element={<Admin><>Teste</></Admin>} >
            </Route>
        </Routers>
    )
}