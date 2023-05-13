<?php

namespace App\Http\Controllers\Itemq;

use App\Http\Resources\NewsCollection;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ItemQuotationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    // Page Item Quotation
    public function crew()
    {
        return Inertia::render('Item Quotation/Crew/ItemCrew');
    }

    public function detailCrew()
    {
        return Inertia::render('Item Quotation/Crew/DetailCrew');
    }

    public function bonus()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Item Quotation/Data Bonus/DataBonus');
    }

    public function event()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Item Quotation/Data Event/DataEvent');
    }

    public function jKlien()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Item Quotation/Data Jenis Klien/JenisKlien');
    }

    public function klien()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Item Quotation/Data Klien/Klien');
    }

    public function fTour()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Item Quotation/Fasilitas Tour/FasilitasTour');
    }

    public function kTour()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Item Quotation/Kategori Tour/KategoriTour');
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
     * @param  \App\Models\ItemQuotation  $itemQuotation
     * @return \Illuminate\Http\Response
     */
    public function show(ItemQuotation $itemQuotation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ItemQuotation  $itemQuotation
     * @return \Illuminate\Http\Response
     */
    public function edit(ItemQuotation $itemQuotation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ItemQuotation  $itemQuotation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ItemQuotation $itemQuotation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ItemQuotation  $itemQuotation
     * @return \Illuminate\Http\Response
     */
    public function destroy(ItemQuotation $itemQuotation)
    {
        //
    }
}
