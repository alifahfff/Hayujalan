<?php

use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Report\ReportController;
use App\Http\Controllers\Akses\AksesController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\Itemq\CrewOperasionalController;
use App\Http\Controllers\Itemq\FasilitasTourController;
use App\Http\Controllers\Itemq\DataEventController;
use App\Http\Controllers\Itemq\DataBonusController;
use App\Http\Controllers\Itemq\DataJenisKlienController;
use App\Http\Controllers\Itemq\DataKlienController;
use App\Http\Controllers\Itemq\DataKategoriTourController;
use App\Http\Controllers\Quotation\QuotationTourController;
use App\Http\Controllers\Vendor\VendorDestinasiWisataController;

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
// Route::get('/itemQuotation', function () {
//     return Inertia::render('Dashboard');
// })->name('itemQuitation');

Route::controller(CrewOperasionalController::class)->group(function () {
    Route::get('/crew', 'show')->name('crew');
    Route::post('/crew', 'store')->name('create.crew');
    Route::get('/crew/edit', 'edit')->name('edit.crew');
    Route::post('/crew/update', 'update')->name('update.crew');
    Route::post('/crew/delete', 'destroy')->name('delete.crew');
});

Route::controller(FasilitasTourController::class)->group(function () {
    Route::get('/fasilitasTour', 'show')->name('fasilitasTour');
    Route::post('/fasilitasTour', 'store')->name('create.fasilitasTour');
    Route::get('/fasilitasTour/edit', 'edit')->name('edit.fasilitasTour');
    Route::post('/fasilitasTour/update', 'update')->name('update.fasilitasTour');
    Route::post('/fasilitasTour/delete', 'destroy')->name('delete.fasilitasTour');
});

Route::controller(DataEventController::class)->group(function () {
    Route::get('/event', 'show')->name('event');
    Route::post('/event', 'store')->name('create.event');
    Route::get('/event/edit', 'edit')->name('edit.event');
    Route::post('/event/update', 'update')->name('update.event');
    Route::post('/event/delete', 'destroy')->name('delete.event');
});

Route::controller(DataBonusController::class)->group(function () {
    Route::get('/bonus', 'show')->name('bonus');
    Route::post('/bonus', 'store')->name('create.bonus');
    Route::get('/bonus/edit', 'edit')->name('edit.bonus');
    Route::post('/bonus/update', 'update')->name('update.bonus');
    Route::post('/bonus/delete', 'destroy')->name('delete.bonus');
});

Route::controller(DataJenisKlienController::class)->group(function () {
    Route::get('/jenisKlien', 'show')->name('jenisKlien');
    Route::post('/jenisKlien', 'store')->name('create.jenisKlien');
    Route::get('/jenisKlien/edit', 'edit')->name('edit.jenisKlien');
    Route::post('/jenisKlien/update', 'update')->name('update.jenisKlien');
    Route::post('/jenisKlien/delete', 'destroy')->name('delete.jenisKlien');
});

Route::controller(DataKategoriTourController::class)->group(function () {
    Route::get('/kategoriTour', 'show')->name('kategoriTour');
    Route::post('/kategoriTour', 'store')->name('create.kategoriTour');
    Route::get('/kategoriTour/edit', 'edit')->name('edit.kategoriTour');
    Route::post('/kategoriTour/update', 'update')->name('update.kategoriTour');
    Route::post('/kategoriTour/delete', 'destroy')->name('delete.kategoriTour');
});

Route::controller(DataKlienController::class)->group(function () {
    Route::get('/klien', 'show')->name('klien');
    Route::post('/klien', 'store')->name('create.klien');
    Route::get('/klien/edit', 'edit')->name('edit.klien');
    Route::post('/klien/update', 'update')->name('update.klien');
    Route::post('/klien/delete', 'destroy')->name('delete.klien');
});

// Report
Route::controller(ReportController::class)->group(function () {
    Route::get('/report', 'show')->name('report');
    // Route::post('/report', 'store')->name('create.report');
    // Route::get('/report/edit', 'edit')->name('edit.report');
    // Route::post('/report/update', 'update')->name('update.report');
    // Route::post('/report/delete', 'destroy')->name('delete.report');
});

// Akses
Route::controller(AksesController::class)->group(function () {
    Route::get('/akses', 'show')->name('akses');
    // Route::post('/akses', 'store')->name('create.akses');
    // Route::get('/akses/edit', 'edit')->name('edit.akses');
    // Route::post('/akses/update', 'update')->name('update.akses');
    // Route::post('/akses/delete', 'destroy')->name('delete.akses');
});

// Quotation
Route::controller(QuotationTourController::class)->group(function () {
    Route::get('/quotation', 'show')->name('quotation');
    Route::get('/quotation/qmanualform/', 'form')->name('quotationform');
    Route::post('/quotation', 'store')->name('create.quotation');
    Route::get('/quotation/edit', 'edit')->name('edit.quotation');
    Route::post('/quotation/update', 'update')->name('update.quotation');
    Route::post('/quotation/delete', 'destroy')->name('delete.quotation');
});

// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

// Vendor
Route::get('/areawisata', [VendorController::class, 'areaWisata'])->name('areawisata');
Route::get('/areawisata/detail', [VendorController::class, 'detailArea'])->name('areawisata.detail');
Route::get('/destinasiwisata', [VendorDestinasiWisataController::class, 'show'])->name('destinasiwisata');
Route::get('/destinasiwisata/detail', [VendorController::class, 'detailDestinasi'])->name('destinasiwisata.detail');
Route::get('/transportasi', [VendorController::class, 'transportasi'])->name('transportasi');
Route::get('/transportasi/detail', [VendorController::class, 'detailTransportasi'])->name('transportasi.detail');
Route::get('/hotel', [VendorController::class, 'hotel'])->name('hotel');
Route::get('/hotel/detail', [VendorController::class, 'detailHotel'])->name('hotel.detail');
Route::get('/rumahmakan', [VendorController::class, 'rumahMakan'])->name('rumahmakan');
Route::get('/rumahmakan/detail', [VendorController::class, 'detailRM'])->name('rumahmakan.detail');

// Quotation
Route::get('/manualquotation', [QuotationController::class, 'manualQuotation'])->name('manualquotation');

require __DIR__ . '/auth.php';
