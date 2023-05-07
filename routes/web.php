<?php

use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\AksesController;
use App\Http\Controllers\VendorController;

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

Route::get('/', [NewsController::class, 'index']);
Route::get('/homepage', [NewsController::class, 'index'])->name('Homepage');

// Item Quotation
Route::get('/crew', [App\Http\Controllers\ItemQuotationController::class, 'crew'])->name('crew');
Route::get('/crew/detail', [App\Http\Controllers\ItemQuotationController::class, 'detailCrew'])->name('crew.detail');
Route::get('/bonus', [App\Http\Controllers\ItemQuotationController::class, 'bonus'])->name('bonus');
Route::get('/event', [App\Http\Controllers\ItemQuotationController::class, 'event'])->name('event');
Route::get('/jenisKlien', [App\Http\Controllers\ItemQuotationController::class, 'jKlien'])->name('jKlien');
Route::get('/klien', [App\Http\Controllers\ItemQuotationController::class, 'klien'])->name('klien');
Route::get('/fasilitasTour', [App\Http\Controllers\ItemQuotationController::class, 'fTour'])->name('fTour');
Route::get('/kategoriTour', [App\Http\Controllers\ItemQuotationController::class, 'kTour'])->name('kTour');

// Report
Route::get('/report', [ReportController::class, 'report'])->name('report');

// Akses
Route::get('/hakAkses', [AksesController::class, 'akses'])->name('akses');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

// Route::get('/areawisata', function () {
//     return Inertia::render('Vendor/AreaWisata/VendorArea');
// })->name('areawisata');

Route::get('/areawisata', [VendorController::class, 'areaWisata'])->name('areawisata');
Route::get('/areawisata/detail', [VendorController::class, 'detailArea'])->name('areawisata.detail');
Route::get('/destinasiwisata', [VendorController::class, 'destinasiWisata'])->name('destinasiwisata');
Route::get('/destinasiwisata/detail', [VendorController::class, 'detailDestinasi'])->name('destinasiwisata.detail');
Route::get('/transportasi', [VendorController::class, 'transportasi'])->name('transportasi');
Route::get('/transportasi/detail', [VendorController::class, 'detailTransportasi'])->name('transportasi.detail');
Route::get('/hotel', [VendorController::class, 'hotel'])->name('hotel');
Route::get('/hotel/detail', [VendorController::class, 'detailHotel'])->name('hotel.detail');
Route::get('/rumahmakan', [VendorController::class, 'rumahMakan'])->name('rumahmakan');
Route::get('/rumahmakan/detail', [VendorController::class, 'detailRM'])->name('rumahmakan.detail');

// Route::post('/news', [NewsController::class, 'store'])->middleware(['auth', 'verified'])->name('create.news');
// Route::get('/news', [NewsController::class, 'show'])->middleware(['auth', 'verified'])->name('my.news');
// Route::get('/news/edit', [NewsController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.news');
// Route::post('/news/update', [NewsController::class, 'update'])->middleware(['auth', 'verified'])->name('update.news');
// Route::post('/news/delete', [NewsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.news');


require __DIR__ . '/auth.php';
