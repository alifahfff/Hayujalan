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
        //
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
    public function edit(vendorTransportasi $vendorTransportasi, request $request)
    {
        return Inertia::render('Vendor/Transportasi/DetailTransport',[
            'transportasi' => $vendorTransportasi->find($request->id) 
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
