<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use Inertia\Inertia;
use App\Models\News;
use App\Models\User;
use Illuminate\Http\Request;

class VendorController extends Controller
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


    //---- Area Wisata ----//
    public function areaWisata()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/AreaWisata/VendorArea');
    }

    public function detailArea()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/AreaWisata/DetailAreaWisata');
    }

    //---- Destinasi Wisata ------//
    public function destinasiWisata()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/DestinasiWisata/VendorDestinasi');
    }

    public function detailDestinasi()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/DestinasiWisata/DetailDestinasi');
    }

    //----- Transportasi ------//
    public function transportasi()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/Transportasi/VendorTransport');
    }

    public function detailTransportasi()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/Transportasi/DetailTransport');
    }

    //----- Hotel -------//
    public function hotel()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/Hotel/VendorHotel');
    }

    public function detailHotel()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/Hotel/DetailHotel');
    }

    //----- Rumah Makan ------//
    public function rumahMakan()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/RumahMakan/VendorRM');
    }

    public function detailRM()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Vendor/RumahMakan/VendorRM');
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
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function show(Vendor $vendor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function edit(Vendor $vendor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vendor $vendor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vendor $vendor)
    {
        //
    }
}
