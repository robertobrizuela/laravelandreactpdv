@extends('adminlte::page')

@section('title', 'ALIRICK')

@section('content_header')
    <h1>Dashboard</h1>
@stop

@section('content')
    <div id="root"></div>
@stop

@section('css')
    <link rel="icon" type="image/png" href="{{ asset('images/alogo.png') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    @vite(['resources/css/app.css'])
@stop

@section('js')
    @vite(['resources/js/app.tsx'])
    <script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/js/adminlte.min.js"></script>
@stop
