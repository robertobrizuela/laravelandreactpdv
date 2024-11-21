import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import PDVHome from '../pdv/pages/Home';
import Sales from '../pdv/pages/Sales';
import Products from '../pdv/pages/Products';
import Clients from '../pdv/pages/Clients';
import Activity from '../pdv/pages/Activity';
import Map from '../pdv/pages/Map';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/react" element={<Layout />}>
                    <Route index element={<PDVHome />} />
                    <Route path="pdv">
                        <Route index element={<PDVHome />} />
                        <Route path="sales" element={<Sales />} />
                        <Route path="products" element={<Products />} />
                        <Route path="clients" element={<Clients />} />
                        <Route path="activity" element={<Activity />} />
                        <Route path="map" element={<Map />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/react" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;