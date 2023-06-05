<?php

namespace App\Http\Controllers\Quotation;

use App\Models\Vendor\areaWisata;
use App\Models\Quotation\quotationTour;
use App\Models\Quotation\quotationTransaksi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class QuotationTourController extends Controller
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
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */
    public function show(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/Quotations');
    }

    public function form(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/QuotationsForm');
    }

    public function result(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/QuotationsResult');
    }

    public function showrec(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/QuotationsRecomend');
    }
    public function formrec(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/QuotationsRecomendForm');
    }
    public function recresult(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/QuotationsRecomendResult');
    }
    public function recpdf(quotationTour $quotationTour) 
    {
        return Inertia::render('Quotation/QuotationsPDF');
    }

    public function qhistory(quotationTransaksi $quotationTour)
    {
        $area = areaWisata::all();
        $quotation = quotationTransaksi::with('quotation.areaWisata')->get();
        return Inertia::render('Quotation/QuotationsHistory', [
            'quotation' => $quotation,
            'area' => $area,
        ]);
    }

    
    public function qhistoryresult(quotationTransaksi $quotationTour)
    {
        $area = areaWisata::all();
        $quotation = quotationTransaksi::with('quotation.areaWisata','quotation.kategori')->get();
        return Inertia::render('Quotation/DataQuoResult', [
            'quotation' => $quotation,
            'area' => $area,
        ]);
    }

    public function sh(Request $request)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */
    public function edit(quotationTour $quotationTour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, quotationTour $quotationTour)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */
    public function destroy(quotationTour $quotationTour)
    {
        //
    }
}
