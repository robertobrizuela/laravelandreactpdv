import './bootstrap';
import Alpine from 'alpinejs';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

window.Alpine = Alpine;
Alpine.start();

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Router />
                <ToastContainer />
            </BrowserRouter>
        </React.StrictMode>
    );
}
