import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic', // Cambiado a classic
            babel: {
                presets: ['@babel/preset-react', '@babel/preset-typescript'],
                plugins: ['@babel/plugin-transform-react-jsx'],
                babelrc: false,
                configFile: false
            }
        }),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.tsx'
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom']
    }
});