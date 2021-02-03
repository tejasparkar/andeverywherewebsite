<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Mail\Subscription;
use Illuminate\Support\Facades\Mail;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/email', function () {
    
    Mail::to('tparkar0@gmail.com')->send(new Subscription());
    return new Subscription(); 
});
Route::get('/', function () {
    return view('landingpage');
});
Route::get('/production', function () {
    return view('production');
});
Route::get('/technologies', function () {
    return view('technologies');
});
Route::get('/marketing', function () {
    return view('marketing');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
