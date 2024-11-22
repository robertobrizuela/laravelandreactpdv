import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { PDVHome } from '../pdv/pages/Home';
import { Clients } from '../pdv/pages/Clients';

export function Router() {
    return (
        <Routes>
            <Route path="/react" element={<Layout />}>
                <Route index element={<PDVHome />} />
                <Route path="pdv/clients" element={<Clients />} />
            </Route>
        </Routes>
    );
}