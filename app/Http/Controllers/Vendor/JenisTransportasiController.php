<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\jenisTransportasi;
use App\Models\Itemq\crewOperasional;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class JenisTransportasiController extends Controller
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
        $jenis = new jenisTransportasi();
        $jenis->namaJenis = $request->namaJenis;
        $jenis->PenggunaanUnit = $request->PenggunaanUnit;
        $jenis->MaxKapasitas = $request->MaxKapasitas;
        $jenis->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\jenisTransportasi  $jenisTransportasi
     * @return \Illuminate\Http\Response
     */
    public function show(jenisTransportasi $jenisTransportasi)
    {
        $crew = crewOperasional::all();
        $jenis = jenisTransportasi::all();
        return Inertia::render('Vendor/JenisTransport/VendorJenisTransport', [
            'jenis' => $jenis,
            'crew' => $crew,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\jenisTransportasi  $jenisTransportasi
     * @return \Illuminate\Http\Response
     */
    public function edit(jenisTransportasi $jenisTransportasi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\jenisTransportasi  $jenisTransportasi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        jenisTransportasi::where('id', $request->id)->update([
            'idCrewOperasional' => $request->idCrewOperasional,
            'namaJenis' => $request->namaJenis,
            'PenggunaanUnit' => $request->PenggunaanUnit,
            'MaxKapasitas' => $request->MaxKapasitas,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\jenisTransportasi  $jenisTransportasi
     * @return \Illuminate\Http\Response
     */
    public function destroy(jenisTransportasi $jenisTransportasi)
    {
        //
    }
}
