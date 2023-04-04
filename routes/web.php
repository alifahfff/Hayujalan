<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('home');
});
//-------route data vendor---------///
Route::get('/area', function () {
    return view('vendor.area');
});
Route::get('/destinasi', function () {
    return view('vendor.destinasi');
});
Route::get('/transportasi', function () {
    return view('vendor.transportasi');
});
Route::get('/RM', function () {
    return view('vendor.RM');
});
Route::get('/hotel', function () {
    return view('vendor.hotel');
});

//-------route data item quotation---------///
Route::get('/fasilitas', function () {
    return view('item.fasilitasTour');
});
Route::get('/crew', function () {
    return view('item.crew');
});
Route::get('/event', function () {
    return view('item.event');
});
Route::get('/bonus', function () {
    return view('item.bonus');
});
Route::get('/klien', function () {
    return view('item.klien');
});
Route::get('/kategori', function () {
    return view('item.kategoriTour');
});

//-------route quotation----------//
Route::get('/manual', function () {
    return view('quotation.quotationM');
});
Route::get('/rekomendasi', function () {
    return view('quotation.quotationR');
});
Route::get('/data', function () {
    return view('quotation.dataQuotation');
});
