<?php

namespace App\Http\Controllers\Itemq;

use App\Models\Itemq\dataJenisKlien;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DataJenisKlienController extends Controller
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
        $Mydata = new dataJenisKlien();
        $Mydata->namaJenisKlien = $request->namaJenisKlien;
        $Mydata->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\dataJenisKlien  $dataJenisKlien
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        return Inertia::render('Item Quotation/Data Jenis Klien/JenisKlien', [
            'Mydata' => dataJenisKlien::when($request->term, function ($query, $term) {
                $query->where('namaJenisKlien', 'LIKE', "%{$term}%");
            }) ->paginate(4)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\dataJenisKlien  $dataJenisKlien
     * @return \Illuminate\Http\Response
     */
    public function edit(dataJenisKlien $Mydata, Request $request)
    {
        return Inertia::render('Item Quotation/Data Jenis Klien/JenisKlien', [
            'Mydata' => $Mydata->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\dataJenisKlien  $dataJenisKlien
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        dataJenisKlien::where('id', $request->id)->update([
            'namaJenisKlien' => $request->namaJenisKlien,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\dataJenisKlien  $dataJenisKlien
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Mydata = dataJenisKlien::find($request->id);
        $Mydata->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
