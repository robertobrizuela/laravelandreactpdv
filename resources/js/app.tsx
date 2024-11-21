import './bootstrap';
import Alpine from 'alpinejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';

// Declaración para TypeScript
declare global {
    interface Window {
        Alpine: any;
    }
}

window.Alpine = Alpine;
Alpine.start();

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    
    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <Router />
            </React.StrictMode>
        );
    } else {
        console.error('Element with id "root" not found');
    }
});
