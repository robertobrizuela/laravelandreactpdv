<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark:bg-gray-900">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <!-- Meta tags SEO -->
        <meta name="description" content="{{ config('app.description', 'Descripción de tu aplicación') }}">
        <meta name="keywords" content="{{ config('app.keywords', 'palabras,clave,de,tu,app') }}">
        
        <title>{{ config('app.name', 'Alirick') }}</title>

        <!-- Favicon -->
        <link rel="icon" type="image/png" href="{{ asset('images/alogo.png') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="hold-transition sidebar-mini bg-red-700">
        <div id="root"></div>

        <div class="wrapper bg-red-700 flex-grow">
            @include('layouts.navigation')

            <!-- Page Heading -->
            @if (isset($header))
                <header class="bg-red-700 dark:bg-red-900 shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {{ $header }}
                    </div>
                </header>
            @endif

            <!-- Page Content -->
            <main class="container mx-auto px-4 py-8">
                {{ $slot }}
            </main>
        </div>

        <!-- Footer -->
        <footer class="bg-red-800 text-white py-6">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center">
                    <div>
                        © {{ date('Y') }} {{ config('app.name') }}. Todos los derechos reservados.
                    </div>
                    <div>
                        <a href="#" class="hover:text-gray-300">Términos</a>
                        <span class="mx-2">|</span>
                        <a href="#" class="hover:text-gray-300">Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>
