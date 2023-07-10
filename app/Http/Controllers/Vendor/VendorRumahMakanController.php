<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\areaWisata;
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
        $rm->idAreaWisata = $request->idAreaWisata;
        $rm->namaRM = $request->namaRM;
        $rm->kapasitasRM = $request->kapasitasRM;
        $rm->kapasitasParkirBusRM = $request->kapasitasParkirBusRM;
        $rm->alamatRM = $request->alamatRM;
        $rm->tlpRM = $request->tlpRM;
        $rm->picRM = $request->picRM;
        $rm->hpPicRM = $request->hpPicRM;
        $rm->linkGmapsRM = $request->linkGmapsRM;
        $rm->tglBerlakuRm = $request->tglBerlakuRm;
        $rm->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }


    public function storeDetail(Request $request)
    {
        $rm = new detailVendorRumahMakan();
        $rm->namaMenu = $request->namaMenu;
        $rm->detailMenu	 = $request->detailMenu	;
        $rm->hargaMenu = $request->hargaMenu;
        $rm->tglUpdateDetailRm = $request->tglUpdateDetailRm;
        $rm->expiredDetailRm = $request->expiredDetailRm;
        $rm->hargaMenu = $request->hargaMenu;
        $rm->idRM = $request->idRM;
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
        $area = areaWisata::all();
        $rm = vendorRumahMakan::with('areaWisataRm')->get();
        return Inertia::render('Vendor/RumahMakan/VendorRM', [
            'rm' => $rm,
            'area' => $area,
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
        $area = areaWisata::all();
        $rm = vendorRumahMakan::findOrFail($request->id);
        $detail = detailVendorRumahMakan::where('idRM', '=', $request->id)->get();
         return Inertia::render('Vendor/RumahMakan/DetailRM',[
             'rm' => $rm,
             'detail' => $detail,
             'area' => $area,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\vendorRumahMakan  $vendorRumahMakan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        vendorRumahMakan::where('idRM', $request->id)->update([
            'idAreaWisata' => $request->idAreaWisata,
            'namaRM' => $request->namaRM,
            'kapasitasRM' => $request->kapasitasRM,
            'kapasitasParkirBusRM' => $request->kapasitasParkirBusRM,
            'AlamatRM' => $request->AlamatRM,
            'tlpRM' => $request->tlpRM,
            'picRM' => $request->picRM,
            'hpPicRM' => $request->hpPicRM,
            'linkGmapsRM' => $request->linkGmapsRM,
            'tglBerlakuRm' => $request->tglBerlakuRm,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    public function updateDetail(Request $request)
    {
        detailVendorRumahMakan::where('id', $request->id)->update([
            'namaMenu' => $request->namaMenu,
            'detailMenu' => $request->detailMenu,
            'hargaMenu' => $request->hargaMenu,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vendorRumahMakan  $vendorRumahMakan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $rm = vendorRumahMakan::find($request->id);
        $rm->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }

    public function destroyDetail(Request $request)
    {
        $rm = detailVendorRumahMakan::find($request->id);
        $rm->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
