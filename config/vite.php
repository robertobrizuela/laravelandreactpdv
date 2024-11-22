<?php

return [
    'configs' => [
        'default' => [
            'entryPoints' => [
                'paths' => [
                    'resources/css/app.css',
                    'resources/js/app.tsx',
                ],
                'ignore' => '/\\.d\\.ts$/',
            ],
            'publicDirectory' => 'public',
            'buildDirectory' => 'build',
            'hotFile' => 'storage/vite.hot',
        ],
    ],
]; 