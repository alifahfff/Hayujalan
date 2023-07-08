<?php

namespace App\Http\Controllers\Vendor;

use App\Models\Vendor\areaWisata;
use App\Models\Vendor\vendorTransportasi;
use App\Models\Vendor\detailVendorTransportasi;
use App\Models\Vendor\jenisTransportasi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

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
        $transportasi->idAreaWisata = $request->idAreaWisata;
        $transportasi->namaTransportasi = $request->namaTransportasi;
        $transportasi->alamatTransportasi = $request->alamatTransportasi;
        $transportasi->tlpTransportasi = $request->tlpTransportasi;
        $transportasi->picTransportasi = $request->picTransportasi;
        $transportasi->hpPicTransportasi = $request->hpPicTransportasi;
        $transportasi->tglBerlakuTransportasi = $request->tglBerlakuTransportasi;
        $transportasi->created_at = Carbon::now();
        $transportasi->updated_at = Carbon::now();
        $transportasi->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    public function storeDetail(Request $request)
    {
        $transportasi = new detailVendorTransportasi();
        $transportasi->idTransportasi = $request->idTransportasi;
        $transportasi->idJenisTransportasi = $request->idJenisTransportasi;
        $transportasi->nama = $request->nama;
        $transportasi->tahun = $request->tahun;
        $transportasi->kapasitas = $request->kapasitas;
        $transportasi->qtyKetersediaan = $request->qtyKetersediaan;
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
        $area = areaWisata::all();
        $transportasi = vendorTransportasi::with('AWtransportasi')->get();
        return Inertia::render('Vendor/Transportasi/VendorTransport', [
            'transportasi' => $transportasi,
            'area' => $area,
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
        $area = areaWisata::all();
        $transportasi = vendorTransportasi::findOrFail($request->id); 
        $detail = detailVendorTransportasi::with('jenisTransportasi', 'transportasi') 
        -> where('idTransportasi','=',$request->id)->get();
        $jenis = jenisTransportasi::all();
        return Inertia::render('Vendor/Transportasi/DetailTransport',[
            'transportasi' => $transportasi,  
            'detail' => $detail,
            'jenis' => $jenis,
            'area' => $area,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\vendorTransportasi  $vendorTransportasi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        vendorTransportasi::where('idTransportasi', $request->id)->update([
            'idAreaWisata' => $request->idAreaWisata,
            'namaTransportasi' => $request->namaTransportasi,
            'alamatTransportasi' => $request->alamatTransportasi,
            'tlpTransportasi' => $request->tlpTransportasi,
            'picTransportasi' => $request->picTransportasi,
            'hpPicTransportasi' => $request->hpPicTransportasi,
            'tglBerlakuTransportasi' => $request->tglBerlakuTransportasi,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    public function updateDetail(Request $request)
    {
        detailVendorTransportasi::where('id', $request->id)->update([
            'idJenisTransportasi' => $request->idJenisTransportasi,
            'idTransportasi' => $request->idTransportasi,
            'nama' => $request->nama,
            'tahun' => $request->tahun,
            'kapasitas' => $request->kapasitas,
            'qtyKetersediaanUnit' => $request->qtyKetersediaanUnit,
            'hargaSewaWeekendDalamKota' => $request->hargaSewaWeekendDalamKota,
            'hargaSewaWeekdayDalamKota' => $request->hargaSewaWeekdayDalamKota,
            'hargaSewaWeekendLuarKota' => $request->hargaSewaWeekendLuarKota,
            'hargaSewaWeekdayLuarKota' => $request->hargaSewaWeekdayLuarKota,
            'urlInterior' => $request->urlInterior,
            'urlEksterior' => $request->urlEksterior,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vendorTransportasi  $vendorTransportasi
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $destinasi = vendorTransportasi::find($request->id);
        $destinasi->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }

    public function destroyDetail(Request $request)
    {
        $detail = detailVendorTransportasi::find($request->id);
        $detail->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
