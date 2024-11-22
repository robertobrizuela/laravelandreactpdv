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
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
@stop
