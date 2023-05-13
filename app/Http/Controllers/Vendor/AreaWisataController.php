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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\areaWisata  $areaWisata
     * @return \Illuminate\Http\Response
     */
    public function show(areaWisata $areaWisata)
    {
        return Inertia::render('Vendor/AreaWisata/VendorArea');
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
    public function update(Request $request, areaWisata $areaWisata)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\areaWisata  $areaWisata
     * @return \Illuminate\Http\Response
     */
    public function destroy(areaWisata $areaWisata)
    {
        //
    }
}
