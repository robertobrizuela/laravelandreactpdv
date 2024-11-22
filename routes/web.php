<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Route::get('/dashboard', function () {
    return redirect('/react');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/react/{path?}', function () {
        return view('welcome');
    })->where('path', '.*')->name('react');

    Route::get('/products', [ProductController::class, 'indexWeb'])->name('products.index');

    Route::get('/react/pdv/{path?}', function () {
        return view('welcome');
    })->where('path', '.*');

    Route::get('/react/pdv/products', function () {
        return view('welcome');
    });
});

require __DIR__.'/auth.php';
