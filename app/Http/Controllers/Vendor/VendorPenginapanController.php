<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\vendorPenginapan;
use App\Models\Vendor\detailVendorPenginapan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class VendorPenginapanController extends Controller
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
     * @param  \App\Models\vendorPenginapan  $vendorPenginapan
     * @return \Illuminate\Http\Response
     */
    public function show(vendorPenginapan $vendorPenginapan)
    {
        $hotel = vendorPenginapan::all();
        return Inertia::render('Vendor/Hotel/VendorHotel', [
            'hotel' => $hotel,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\vendorPenginapan  $vendorPenginapan
     * @return \Illuminate\Http\Response
     */
    public function edit(vendorPenginapan $vendorPenginapan, request $request)
    {
        return Inertia::render('Vendor/Hotel/DetailHotel',[
            'hotel' => $vendorPenginapan->find($request->id) 
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\vendorPenginapan  $vendorPenginapan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, vendorPenginapan $vendorPenginapan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vendorPenginapan  $vendorPenginapan
     * @return \Illuminate\Http\Response
     */
    public function destroy(vendorPenginapan $vendorPenginapan)
    {
        //
    }
}
