<?php

namespace App\Http\Controllers\Quotation;

use App\Models\Vendor\areaWisata;
use App\Models\Quotation\quotationTour;
use App\Models\Akses\userProgram;
use App\Models\Akses\userSales;
use App\Models\Itemq\dataKategoriTour;
use App\Models\Vendor\vendorDestinasiWisata;
use App\Models\Vendor\detailVendorDestinasiWisata;
use App\Models\Vendor\vendorTransportasi;
use App\Models\Vendor\detailVendorTransportasi;
use App\Models\Vendor\vendorRumahMakan;
use App\Models\Vendor\detailVendorRumahMakan;
use App\Models\Vendor\vendorPenginapan;
use App\Models\Vendor\detailVendorPenginapan;
use App\Models\Itemq\fasilitasTour;
use App\Models\Itemq\crewOperasional;
use App\Models\Itemq\dataEvent;
use App\Models\Itemq\dataBonus;
use App\Models\Itemq\dataJenisKlien;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\dataBobot;
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
        $areawisata = areaWisata::all();
        $userprogram = userProgram::all();
        $usersales = userSales::all();
        $kategoriwisata = dataKategoriTour::all();
        $destinasi = vendorDestinasiWisata::all();
        $detailDestinasi = detailVendorDestinasiWisata::join('vendor_destinasi_wisatas', 'detail_vendor_destinasi_wisatas.idDestinasiWisata', '=', 'vendor_destinasi_wisatas.id')
                   ->select('vendor_destinasi_wisatas.id', 'vendor_destinasi_wisatas.namaDestinasiWisata',
                   'detail_vendor_destinasi_wisatas.idDestinasiWisata', 
                   'detail_vendor_destinasi_wisatas.tiketMasukWeekday', 
                   'detail_vendor_destinasi_wisatas.tiketMasukWeekend')
                   ->get();
        $rumahMakan = vendorRumahMakan::all();
        $detailRM = detailVendorRumahMakan::join('vendor_rumah_makans', 'detail_vendor_rumah_makans.idRM', '=', 'vendor_rumah_makans.id')
                    ->select('vendor_rumah_makans.id', 
                    'vendor_rumah_makans.namaRM',
                    'detail_vendor_rumah_makans.idRM', 
                    'detail_vendor_rumah_makans.namaMenu', 
                    'detail_vendor_rumah_makans.hargaMenu')
                    ->get();
        $transportasi = vendorTransportasi::all();
        $fasilitasTour = fasilitasTour::all();
        $crewOperasional = crewOperasional::all();
        $dataEvent = dataEvent::all();
        $dataBonus = dataBonus::all();
        $jenisKlien = dataJenisKlien::all();
        return Inertia::render('Quotation/QuotationsForm', [
            'areawisata' => $areawisata,
            'userprogram' => $userprogram,
            'usersales' => $usersales,
            'kategoriwisata' => $kategoriwisata,
            'destinasi' => $destinasi,
            'detailDestinasi' => $detailDestinasi,
            'transportasi' => $transportasi,
            'rumahMakan' => $rumahMakan,
            'detailRM' => $detailRM,
            'fasilitasTour' => $fasilitasTour,
            'crewOperasional' => $crewOperasional,
            'dataEvent' => $dataEvent,
            'dataBonus' => $dataBonus,
            'jenisKlien' => $jenisKlien,
        ]);
    }

    // public function form(quotationTour $quotationTour)
    // {
        
    // }

    public function result(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/QuotationsResult');
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
