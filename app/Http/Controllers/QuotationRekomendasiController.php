<?php

namespace App\Http\Controllers;

use App\Models\quotationRekomendasi;
use App\Models\Vendor\areaWisata;
use App\Models\Quotation\dataBobot;
use App\Models\Quotation\quotationTour;
use App\Models\Itemq\dataJenisKlien;
use App\Http\Controllers\Controller;
use App\Models\Quotation\hasilQRekomendasi;
use App\Models\Itemq\dataKlien;
use Inertia\Inertia;
use Illuminate\Http\Request;

class QuotationRekomendasiController extends Controller
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

    public function showrec(quotationTour $quotationTour)
    {
        $areawisata = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '1')->get();
        $kategori = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '2')->get();
        $budget = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '3')->get();
        $quantity = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '4')->get();
        $durasi = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '5')->get();
        $jenisPaket = dataJenisKlien::all();
        $maxArea = dataBobot::where('idKriteria', '=', '1')
        ->max('jmlBobot');
        $minArea = dataBobot::where('idKriteria', '=', '1')
        ->min('jmlBobot');
        $maxKategori = dataBobot::where('idKriteria', '=', '2')
        ->max('jmlBobot');
        $minKategori = dataBobot::where('idKriteria', '=', '2')
        ->min('jmlBobot');
        $maxBudget = dataBobot::where('idKriteria', '=', '3')
        ->max('jmlBobot');
        $minBudget = dataBobot::where('idKriteria', '=', '3')
        ->min('jmlBobot');
        $maxQTY = dataBobot::where('idKriteria', '=', '4')
        ->max('jmlBobot');
        $minQTY = dataBobot::where('idKriteria', '=', '4')
        ->min('jmlBobot');
        $maxDurasi = dataBobot::where('idKriteria', '=', '5')
        ->max('jmlBobot');
        $minDurasi = dataBobot::where('idKriteria', '=', '5')
        ->min('jmlBobot');
        return Inertia::render('Quotation/QuotationsRecomend', [
            'jenisPaket' => $jenisPaket,
            'areawisata' => $areawisata,
            'kategori' => $kategori,
            'budget' => $budget,
            'quantity' => $quantity,
            'durasi' => $durasi,
            'maxArea' => $maxArea,
            'minArea' => $minArea,
            'maxKategori' => $maxKategori,
            'minKategori' => $minKategori,
            'maxBudget' => $maxBudget,
            'minBudget' => $minBudget,
            'maxQTY' => $maxQTY,
            'minQTY' => $minQTY,
            'maxDurasi' => $maxDurasi,
            'minDurasi' => $minDurasi,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $klien = dataKlien::create([
            'jenis_klien_id' => 1,
            'namaKlien' => $request->namaKlien,
        ]);

        $rekomendasi = new hasilQRekomendasi([
            'b_areaWisata' => $request->b_areaWisata,
            'b_kategori' => $request->b_kategori,
            'b_budget' => $request->b_budget,
            'b_durasi' => $request->b_durasi,
            'b_jumlahOrang' => $request->b_jumlahOrang,
            'idDataKlien' => $klien->id,
        ]);

        $rekomendasi->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function show(quotationRekomendasi $quotationRekomendasi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function edit(quotationRekomendasi $quotationRekomendasi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, quotationRekomendasi $quotationRekomendasi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function destroy(quotationRekomendasi $quotationRekomendasi)
    {
        //
    }
}
