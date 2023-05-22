<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\vendorDestinasiWisata;
use App\Models\Vendor\detailVendorDestinasiWisata;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

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
        //
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
    public function edit(vendorDestinasiWisata $vendorDestinasiWisata, Request $request)
    {
        $destinasi = detailVendorDestinasiWisata::all();
        return Inertia::render('Vendor/DestinasiWisata/DetailDestinasi',[
            'destinasi' => $vendorDestinasiWisata->find($request->id), 'detail' => $destinasi, 
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

    // public function detailDestinasi()
    // {
    //     return Inertia::render('Vendor/DestinasiWisata/DetailDestinasi');
    // }
}
