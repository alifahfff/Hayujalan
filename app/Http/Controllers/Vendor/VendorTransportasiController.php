<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\vendorTransportasi;
use App\Models\Vendor\detailVendorTransportasi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class VendorTransportasiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $transportasi = new vendorTransportasi();
        $transportasi->namaTransportasi = $request->namaTransportasi;
        $transportasi->alamatTransportasi = $request->alamatTransportasi;
        $transportasi->tlpTransportasi = $request->tlpTransportasi;
        $transportasi->picTransportasi = $request->picTransportasi;
        $transportasi->hpPicTransportasi = $request->hpPicTransportasi;
        $transportasi->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    public function storeDetail(Request $request)
    {
        $transportasi = new detailVendorTransportasi();
        $transportasi->nama = $request->nama;
        $transportasi->tahun = $request->tahun;
        $transportasi->kapasitas = $request->kapasitas;
        $transportasi->qtyKetersediaanUnit = $request->qtyKetersediaanUnit;
        $transportasi->hargaSewaWeekendDalamKota = $request->hargaSewaWeekendDalamKota;
        $transportasi->hargaSewaWeekdayDalamKota = $request->hargaSewaWeekdayDalamKota;
        $transportasi->hargaSewaWeekendLuarKota = $request->hargaSewaWeekendLuarKota;
        $transportasi->hargaSewaWeekdayLuarKota = $request->hargaSewaWeekdayLuarKota;
        $transportasi->urlInterior = $request->urlInterior;
        $transportasi->urlEksterior = $request->urlEksterior;
        $transportasi->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\vendorTransportasi  $vendorTransportasi
     * @return \Illuminate\Http\Response
     */
    public function show(vendorTransportasi $vendorTransportasi)
    {
        $transportasi = vendorTransportasi::all();
        return Inertia::render('Vendor/Transportasi/VendorTransport', [
            'transportasi' => $transportasi,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\vendorTransportasi  $vendorTransportasi
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $transportasi = vendorTransportasi::findOrFail($request->id); 
        $detail = detailVendorTransportasi::where('idTransportasi','=',$request->id)->get();
        return Inertia::render('Vendor/Transportasi/DetailTransport',[
            'transportasi' => $transportasi,  
            'detail' => $detail,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\vendorTransportasi  $vendorTransportasi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, vendorTransportasi $vendorTransportasi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vendorTransportasi  $vendorTransportasi
     * @return \Illuminate\Http\Response
     */
    public function destroy(vendorTransportasi $vendorTransportasi)
    {
        //
    }
}
