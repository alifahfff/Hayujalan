<?php

use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Report\ReportController;
use App\Http\Controllers\Akses\AksesController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\QuotationRekomendasiController;
use App\Http\Controllers\Itemq\CrewOperasionalController;
use App\Http\Controllers\Itemq\FasilitasTourController;
use App\Http\Controllers\Itemq\DataEventController;
use App\Http\Controllers\Itemq\DataBonusController;
use App\Http\Controllers\Itemq\DataJenisKlienController;
use App\Http\Controllers\Itemq\DataKlienController;
use App\Http\Controllers\Itemq\DataKategoriTourController;
use App\Http\Controllers\Quotation\QuotationTourController;
use App\Http\Controllers\Vendor\VendorDestinasiWisataController;
use App\Http\Controllers\Vendor\VendorTransportasiController;
use App\Http\Controllers\Vendor\JenisTransportasiController;
use App\Http\Controllers\Vendor\VendorPenginapanController;
use App\Http\Controllers\Vendor\VendorRumahMakanController;
use App\Http\Controllers\Vendor\AreaWisataController;



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


// Login
// Route::get('/', function () {
//     return view('auth/login');
// });
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
    // Route::get('/klien/search', 'search')->name('search.klien');
    Route::post('/klien', 'store')->name('create.klien');
    Route::post('/klien/post', 'postKlien')->name('create.klien');
    Route::get('/klien/edit', 'edit')->name('edit.klien');
    Route::post('/klien/update', 'update')->name('update.klien');
    Route::post('/klien/delete', 'destroy')->name('delete.klien');
});

// Report
Route::controller(ReportController::class)->group(function () {
    Route::get('/report', 'show')->name('report');
    // Route::post('/report', 'store')->name('create.report');
    // Route::get('/report/edit', 'edit')->name('edit.report');
    Route::post('/report/update', 'update')->name('update.report');
    // Route::post('/report/delete', 'destroy')->name('delete.report');
});

// Akses
Route::controller(AksesController::class)->group(function () {
    Route::get('/akses', 'show')->name('akses');
    Route::post('/akses/admin', 'storeAdmin')->name('create.admin');
    Route::post('/akses/keuangan', 'storeKeuangan')->name('create.keuangan');
    Route::post('/akses/sales', 'storeSales')->name('create.sales');
    Route::post('/akses/program', 'storeProgram')->name('create.program');
    Route::get('/akses/edit', 'edit')->name('edit.akses');
    Route::post('/akses/update/admin', 'updateAdmin')->name('update.admin');
    Route::post('/akses/update/keuangan', 'updateKeuangan')->name('update.keuangan');
    Route::post('/akses/update/sales', 'updateSales')->name('update.sales');
    Route::post('/akses/update/program', 'updateProgram')->name('update.program');
    Route::post('/akses/delete', 'destroy')->name('delete.akses');
});

// Quotation
Route::controller(QuotationTourController::class)->group(function () {
    Route::get('/quotation', 'show')->name('quotation');
    Route::post('/quotation/post', 'storeQuotationForm')->name('create.quotation');
    // Route::get('/quotation/qmanualform/', 'form')->name('quotationform');
    Route::get('/quotation/qmanualresult/{id}', 'getQuotationResult')->name('quotation.result');
    Route::get('/quotation/qrecomendform/', 'formrec')->name('quotationrecomendform'); 
    Route::get('/quotation/qrecomendresult/', 'recresult')->name('quotationrecomendresult'); 
    Route::get('/quotation/qrecomendpdf/', 'recresult')->name('quotationrecomendpdf');
    Route::get('/quotation/qhistory/', 'qhistory')->name('quotationhistory');
    Route::get('/quotation/qhistory/detail', 'editQhistory')->name('qhistory.detail');
    Route::get('/quotation/qhistory/revisi', 'updateQhistory')->name('qhistory.revisi');
    Route::get('/quotation/qhistoryresult/', 'qhistoryresult')->name('quotationhistoryresult');
    Route::post('/quotation', 'store')->name('create.quotation');
    Route::get('/quotation/edit', 'edit')->name('qmanual.edit');
    Route::post('/quotation/update', 'update')->name('update.quotation');
    Route::post('/quotation/delete', 'destroy')->name('delete.quotation');
});


//Quotation Rekomendasi
Route::controller(QuotationRekomendasiController::class)->group(function(){
    Route::get('/quotation/qrecomend/', 'showrec')->name('quotationrecomend');
    Route::post('/quotation/qrecomend', 'store')->name('store.qrecomend');
    Route::get('/quotationrecomend/hasil', 'show')->name('hasil.qrecomend');
    Route::get('/quotationrecomend/detail/{id}', 'edit')->name('detail.qrecomend');
});
// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

// Vendor Destinasi
Route::controller(VendorDestinasiWisataController::class)->group(function(){
    Route::get('/destinasiwisata', 'show')->name('destinasiwisata');
    Route::get('/destinasiwisata/detail', 'edit')->name('destinasiwisata.detail');
    Route::post('/destinasiwisata', 'store')->name('create.destinasiwisata');
    Route::post('/destinasiwisata/update', 'update')->name('update.destinasiwisata');
    Route::post('/destinasiwisata/detail', 'storeDetail')->name('create.detail');
    Route::post('/destinasiwisata/update/detail', 'updateDetail')->name('update.detail');
    Route::post('/destinasiwisata/delete', 'destroy')->name('delete.destinasi');
    Route::post('/destinasiwisata/delete/detail', 'destroyDetail')->name('delete.detaildestinasi');
    Route::get('/destinasiwisata/details', 'detail')->name('destinasiwisata.details');
});

// Vendor Area Wisata
Route::controller(AreaWisataController::class)->group(function(){
    Route::get('/areawisata', 'show')->name('areawisata');
    Route::get('/areawisata/detail', 'edit')->name('areawisata.detail');    
    Route::post('/areawisata', 'store')->name('create.areawisata');
    Route::post('/areawisata/update', 'update')->name('update.areawisata');
    Route::post('/areawisata/delete', 'destroy')->name('delete.area');

});


//Vendor Transportasi
Route::controller(VendorTransportasiController::class)->group(function (){
    Route::get('/transportasi', 'show')->name('transportasi');
    Route::get('/transportasi/detail', 'edit')->name('transportasi.detail');
    Route::post('/transportasi', 'store')->name('create.transportasi');
    Route::post('/transportasi/update', 'update')->name('update.transportasi');
    Route::post('/transportasi/detail', 'storeDetail')->name('create.detail');
    Route::post('/transportasi/update/detail', 'updateDetail')->name('update.detail');
    Route::post('/transportasi/delete', 'destroy')->name('delete.transport');
    Route::post('/transportasi/delete/detail', 'destroyDetail')->name('delete.detailtransportasi');
});

//Vendor Jenis Transportasi
Route::controller(JenisTransportasiController::class)->group(function (){
    Route::get('/jenisTransportasi', 'show')->name('jenisTransportasi');
    // Route::get('/transportasi/detail', 'edit')->name('transportasi.detail');
    Route::post('/jenisTransportasi', 'store')->name('create.jenis');
    Route::post('/jenisTransportasi/update', 'update')->name('update.jenis');
    // Route::post('/transportasi/detail', 'storeDetail')->name('create.detail');
    // Route::post('/transportasi/update/detail', 'update')->name('update.detail');
});


//Vendor Hotel
Route::controller(VendorPenginapanController::class)->group(function() {
    Route::get('/hotel', 'show')->name('hotel');
    Route::get('/hotel/detail', 'edit')->name('hotel.detail');
    Route::post('/hotel', 'store')->name('create.hotel');
    Route::post('/hotel/update', 'update')->name('update.hotel');
    Route::post('/hotel/detail', 'storeDetail')->name('create.detail');
    Route::post('/hotel/update/detail', 'updateDetail')->name('update.detail');
    Route::post('/hotel/delete', 'destroy')->name('delete.hotel');
    Route::post('/hotel/delete/detail', 'destroyDetail')->name('delete.detailpenginapan');
});


//Vendor Rumah Makan
Route::controller(VendorRumahMakanController::class)->group(function(){
    Route::get('/rumahmakan', 'show')->name('rumahmakan');
    Route::get('/rumahmakan/detail', 'edit')->name('rumahmakan.detail'); 
    Route::post('/rumahmakan', 'store')->name('create.rumahmakan');
    Route::post('/rumahmakan/update', 'update')->name('update.rumahmakan');   
    Route::post('/rumahmakan/detail', 'storeDetail')->name('create.detail');
    Route::post('/rumahmakan/update/detail', 'updateDetail')->name('update.detail'); 
    Route::post('/rumahmakan/delete', 'destroy')->name('delete.rumahmakan');
    Route::post('/rumahmakan/delete/detail', 'destroyDetail')->name('delete.detailrm'); 
});

// Quotation
Route::get('/manualquotation', [QuotationController::class, 'manualQuotation'])->name('manualquotation');

require __DIR__ . '/auth.php';
