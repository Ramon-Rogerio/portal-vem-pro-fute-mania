import { Routes as Routers, Route } from 'react-router-dom';
import Index from '../pages/Index';

export default function Routes() {
    return (
        <Routers>
            <Route path="/" element={<Index />} />
        </Routers>
    )
}