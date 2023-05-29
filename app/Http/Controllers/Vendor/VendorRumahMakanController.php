<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\vendorRumahMakan;
use App\Models\Vendor\detailVendorRumahMakan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class VendorRumahMakanController extends Controller
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
        $rm = new vendorRumahMakan();
        $rm->namaRM = $request->namaRM;
        $rm->kapasitasRM = $request->kapasitasRM;
        $rm->kapasitasParkirBus = $request->kapasitasParkirBus;
        $rm->alamatRM = $request->alamatRM;
        $rm->tlpRM = $request->tlpRM;
        $rm->picRM = $request->picRM;
        $rm->hpPicRM = $request->hpPicRM;
        $rm->linkGmaps = $request->linkGmaps;
        $rm->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }


    public function storeDetail(Request $request)
    {
        $rm = new detailVendorRumahMakan();
        $rm->namaMenu = $request->namaMenu;
        $rm->detailMenu	 = $request->detailMenu	;
        $rm->hargaMenu = $request->hargaMenu;
        $rm->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\vendorRumahMakan  $vendorRumahMakan
     * @return \Illuminate\Http\Response
     */
    public function show(vendorRumahMakan $vendorRumahMakan)
    {
        
        $rm = vendorRumahMakan::all();
        return Inertia::render('Vendor/RumahMakan/VendorRM', [
            'rm' => $rm,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\vendorRumahMakan  $vendorRumahMakan
     * @return \Illuminate\Http\Response
     */
    public function edit(vendorRumahMakan $vendorRumahMakan, request $request)
    {
        $rm = vendorRumahMakan::findOrFail($request->id);
        $detail = detailVendorRumahMakan::where('idRM', '=', $request->id)->get();
         return Inertia::render('Vendor/RumahMakan/DetailRM',[
             'rm' => $rm,
             'detail' => $detail,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\vendorRumahMakan  $vendorRumahMakan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, vendorRumahMakan $vendorRumahMakan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vendorRumahMakan  $vendorRumahMakan
     * @return \Illuminate\Http\Response
     */
    public function destroy(vendorRumahMakan $vendorRumahMakan)
    {
        //
    }
}
