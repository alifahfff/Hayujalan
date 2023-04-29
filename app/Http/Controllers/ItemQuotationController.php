<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use Inertia\Inertia;
use App\Models\News;
use App\Models\User;
use Illuminate\Http\Request;

class ItemQuotationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('ItemCrew', [
            'title' => "CUY UNIVERSE HOME",
            'description' => "Selamat Datang Di Cuy Universe News Portal",
            'news' => $news,
        ]);
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
