@extends('adminlte::page')

@section('title', 'ALIRICK')

@section('content_header')
    <meta name="csrf-token" content="{{ csrf_token() }}">
@stop

@section('content')
    <div id="root"></div>
@stop

@section('css')
    @viteReactRefresh
    @vite(['resources/css/app.css'])
    <link rel="stylesheet" href="{{ asset('css/admin_custom.css') }}">
@stop

@section('js')
    @viteReactRefresh
    @vite(['resources/js/app.tsx'])
    <script>
        window.csrfToken = "{{ csrf_token() }}";
    </script>
@stop
