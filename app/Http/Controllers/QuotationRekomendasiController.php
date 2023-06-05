<?php

namespace App\Http\Controllers;

use App\Models\quotationRekomendasi;
use App\Models\Vendor\areaWisata;
use App\Models\Quotation\dataBobot;
use App\Models\Quotation\quotationTour;
use App\Models\Itemq\dataJenisKlien;
use App\Http\Controllers\Controller;
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
        $jenisPaket = dataJenisKlien::all();
        return Inertia::render('Quotation/QuotationsRecomend', [
            'jenisPaket' => $jenisPaket,
            'areawisata' => $areawisata,
            'kategori' => $kategori,
            'budget' => $budget,
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
        //
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
