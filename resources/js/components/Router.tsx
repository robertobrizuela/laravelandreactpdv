import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { PDVHome } from '../pdv/pages/Home';
import { Clients } from '../pdv/pages/Clients';
import Products from '../pdv/pages/Products';

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/react" element={<Layout />}>
                <Route index element={<PDVHome />} />
                <Route path="pdv/clients" element={<Clients />} />
                <Route path="pdv/products" element={<Products />} />
            </Route>
        </Routes>
    );
};

export default Router;