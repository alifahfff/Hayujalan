<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\vendorDestinasiWisata;
use App\Models\Vendor\detailVendorDestinasiWisata;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Quotation\dataKriteria;
use App\Models\Transaksi\Tbonus;

class VendorDestinasiWisataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Vendor/DestinasiWisata/VendorDestinasi');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $destinasi = new vendorDestinasiWisata();
        $destinasi->namaDestinasiWisata = $request->namaDestinasiWisata;
        $destinasi->kapasitasDestinasiWisata = $request->kapasitasDestinasiWisata;
        $destinasi->kapasitasParkirBus = $request->kapasitasParkirBus;
        $destinasi->alamatDestinasiWisata = $request->alamatDestinasiWisata;
        $destinasi->tlpDestinasiWisata = $request->tlpDestinasiWisata;
        $destinasi->picDestinasiWisata = $request->picDestinasiWisata;
        $destinasi->hpDestinasiWisata = $request->hpDestinasiWisata;
        $destinasi->linkGmaps = $request->linkGmaps;
        $destinasi->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    public function storeDetail(Request $request)
    {
        $destinasi = new detailVendorDestinasiWisata();
        $destinasi->rangePeserta = $request->rangePeserta;
        $destinasi->tiketMasukWeekday = $request->tiketMasukWeekday	;
        $destinasi->tiketMasukWeekend = $request->tiketMasukWeekend;
        $destinasi->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\vendorDestinasiWisata  $vendorDestinasiWisata
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $destinasi = vendorDestinasiWisata::all();
        return Inertia::render('Vendor/DestinasiWisata/VendorDestinasi', [
            'destinasi' => $destinasi,
        ]);
    }

    // public function showDetail()
    // {
    //     $vendorDestinasiWisata = detailVendorDestinasiWisata::all();
    //     return Inertia::render('Vendor')
    // }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\vendorDestinasiWisata  $vendorDestinasiWisata
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $destinasi = vendorDestinasiWisata::findOrFail($request->id); 
        $detail = detailVendorDestinasiWisata::where('idDestinasiWisata','=',$request->id)->get();
        return Inertia::render('Vendor/DestinasiWisata/DetailDestinasi',[
            'destinasi' => $destinasi,  
            'detail' => $detail,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\vendorDestinasiWisata  $vendorDestinasiWisata
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, vendorDestinasiWisata $vendorDestinasiWisata)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vendorDestinasiWisata  $vendorDestinasiWisata
     * @return \Illuminate\Http\Response
     */
    public function destroy(vendorDestinasiWisata $vendorDestinasiWisata)
    {
        //
    }

    //contoh jangan dihapusssss
    public function detail()
    {
       //$destinasi = detailVendorDestinasiWisata::with('vendorDW')->findOrFail($id);
        // $destinasi = quotationTransaksi::with('quotation', 
        // 'tdestinasi', 
        // 'ttransportasi', 
        // 'tpenginapan', 
        // 'trumahmakan', 
        // 'tfasilitas',
        // 'tcrew',
        // 'tevent',
        // 'tbonus',
        // )->get();
        // $destinasi = detailVendorDestinasiWisata::join('vendor_destinasi_wisatas', 'detail_vendor_destinasi_wisatas.idDestinasiWisata', '=', 'vendor_destinasi_wisatas.id')
        //            ->select('vendor_destinasi_wisatas.id', 'vendor_destinasi_wisatas.namaDestinasiWisata',
        //            'detail_vendor_destinasi_wisatas.idDestinasiWisata', 
        //            'detail_vendor_destinasi_wisatas.tiketMasukWeekday', 
        //            'detail_vendor_destinasi_wisatas.tiketMasukWeekend')
        //            ->get();
        $destinasi = Tbonus::with('qtransaksi')->get();
        // $destinasi = dataKlien::with('jenisKlien')->get();
        return response()->json($destinasi);
    }

}
