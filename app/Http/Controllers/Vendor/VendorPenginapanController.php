<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\areaWisata;
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
        $hotel = new vendorPenginapan();
        $hotel->idAreaWisata = $request->idAreaWisata;
        $hotel->namaPenginapan = $request->namaPenginapan;
        $hotel->bintangPenginapan = $request->bintangPenginapan;
        $hotel->alamatPenginapan = $request->alamatPenginapan;
        $hotel->tlpPenginapan = $request->tlpPenginapan;
        $hotel->picPenginapan = $request->picPenginapan;
        $hotel->hpPicPenginapan = $request->hpPicPenginapan;
        $hotel->linkGmapsPenginapan = $request->linkGmapsPenginapan;
        $hotel->kapasitasParkirBusPenginapan = $request->kapasitasParkirBusPenginapan;
        $hotel->tglBerlakuPenginapan = $request->tglBerlakuPenginapan;
        $hotel->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }


    public function storeDetail(Request $request)
    {
        $hotel = new detailVendorPenginapan();
        $hotel->namaJenisKamar = $request->namaJenisKamar;
        $hotel->kapasitasKamar = $request->kapasitasKamar;
        $hotel->qtyKetersediaanKamar = $request->qtyKetersediaanKamar;
        $hotel->hargaSewaWeekdayPerKamar = $request->hargaSewaWeekdayPerKamar;
        $hotel->hargaSewaWeekendPerKamar = $request->hargaSewaWeekendPerKamar;
        $hotel->idPenginapan = $request->idPenginapan ;
        $hotel->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\vendorPenginapan  $vendorPenginapan
     * @return \Illuminate\Http\Response
     */
    public function show(vendorPenginapan $vendorPenginapan)
    {
        $area = areaWisata::all();
        $hotel = vendorPenginapan::with('AWpenginapan')->get();
        return Inertia::render('Vendor/Hotel/VendorHotel', [
            'hotel' => $hotel,
            'area' => $area,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\vendorPenginapan  $vendorPenginapan
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $area = areaWisata::all();
        $hotel = vendorPenginapan::findOrFail($request->id); 
        $detail = detailVendorPenginapan::where('idPenginapan','=',$request->id)->get();
        return Inertia::render('Vendor/Hotel/DetailHotel',[
            'hotel' => $hotel,  
            'detail' => $detail,
            'area' => $area,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\vendorPenginapan  $vendorPenginapan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        vendorPenginapan::where('idPenginapan', $request->id)->update([
            'namaPenginapan' => $request->namaPenginapan,
            'bintangPenginapan' => $request->bintangPenginapan,
            'alamatPenginapan' => $request->alamatPenginapan,
            'tlpPenginapan' => $request->tlpPenginapan,
            'picPenginapan' => $request->picPenginapan,
            'hpPicPenginapan' => $request->hpPicPenginapan,
            'linkGmapsPenginapan' => $request->linkGmapsPenginapan,
            'kapasitasParkirBusPenginapan' => $request->kapasitasParkirBusPenginapan,
            'tglBerlakuPenginapan' => $request->tglBerlakuPenginapan,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    public function updateDetail(Request $request)
    {
        detailVendorPenginapan::where('id', $request->id)->update([
            'namaJenisKamar' => $request->namaJenisKamar,
            'kapasitasKamar' => $request->kapasitasKamar,
            'qtyKetersediaanKamar' => $request->qtyKetersediaanKamar,
            'hargaSewaWeekdayPerKamar' => $request->hargaSewaWeekdayPerKamar,
            'hargaSewaWeekendPerKamar' => $request->hargaSewaWeekendPerKamar,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vendorPenginapan  $vendorPenginapan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $hotel = vendorPenginapan::find($request->id);
        $hotel->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }

    public function destroyDetail(Request $request)
    {
        $detail = detailVendorPenginapan::find($request->id);
        $detail->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
