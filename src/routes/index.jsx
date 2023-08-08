import { Routes as Routers, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Contact from '../pages/Contact';

export default function Routes() {
    return (
        <Routers>
            <Route path="/" element={<Index />} />
            <Route path="/contato" element={<Contact />} />
        </Routers>
    )
}