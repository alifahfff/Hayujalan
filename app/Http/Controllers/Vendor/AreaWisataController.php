<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\areaWisata;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

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
        $Mydata = new areaWisata();
        $Mydata->namaArea = $request->namaArea;
        $Mydata->save();
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
