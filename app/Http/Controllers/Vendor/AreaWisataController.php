<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\areaWisata;
use App\Models\Quotation\dataKriteria;
use App\Models\Quotation\dataBobot;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class AreaWisataController extends Controller
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
        $maxBobot = dataBobot::where('idKriteria', '=', '1') -> max('jumlahBobot');
        $bobot = dataBobot::create([
            'idKriteria' => 1,
            'namaBobot' => $request->namaArea,
            'jumlahBobot' => $maxBobot+1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        $areaWisata =areaWisata::create([
            'idBobot' => $bobot->idBobot,
            'namaArea' => $request->namaArea,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\areaWisata  $areaWisata
     * @return \Illuminate\Http\Response
     */
    public function show(areaWisata $areaWisata)
    {
        $area = areaWisata::all();
        $bobot = dataBobot::all();
        return Inertia::render('Vendor/AreaWisata/VendorArea', [
            'area' => $area,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\areaWisata  $areaWisata
     * @return \Illuminate\Http\Response
     */
    public function edit(areaWisata $areaWisata)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\areaWisata  $areaWisata
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        areaWisata::where('id', $request->id)->update([
            'namaArea' => $request->namaArea,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\areaWisata  $areaWisata
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $area = areaWisata::find($request->id);
        $area->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
