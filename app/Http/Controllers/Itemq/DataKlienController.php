<?php

namespace App\Http\Controllers\Itemq;

use App\Models\Itemq\dataKlien;
use App\Models\Itemq\dataJenisKlien;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DataKlienController extends Controller
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
        $Mydata = new dataKlien();
        $Mydata->namaKlien = $request->namaKlien;
        $Mydata->alamatKlien = $request->alamatKlien;
        $Mydata->tlpKlien = $request->tlpKlien;
        $Mydata->namaPicKlien = $request->namaPicKlien;
        $Mydata->tlpPicKlien = $request->tlpPicKlien;
        $Mydata->jenis_klien_id = $request->jenis_klien_id;
        $Mydata->tglBerlakuItem = $request->tglBerlakuItem;
        $Mydata->save();
        
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\dataKlien  $dataKlien
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $jenisKlien = dataJenisKlien::all();
        $keyword = $request->input('key');
        $mydata = dataKlien::with('jenisKlien')
            ->where('namaKlien', 'like', '%' . $keyword . '%')
            ->paginate(4);
        // $mydata = dataKlien::with('jenisKlien')->paginate(4);
        //$mydata = dataKlien::with('jenisKlien')->get();
        return Inertia::render('Item Quotation/Data Klien/Klien', [
            // 'Mydata' => dataKlien::whereHas('jenisKlien', function ($query) use ($keyword) {
            //     $query->where('namaKlien', 'LIKE', '%' . $keyword . '%');
            // }) ->paginate(4),
            'Mydata' => $mydata,
            'jenisKlien' => $jenisKlien,
        ]);
    }

    // public function search(Request $request)
    // {
    //     $jenisKlien = dataJenisKlien::all();
    //     $keyword = $request->input('key');
    //     $mydata = dataKlien::with('jenisKlien')
    //         ->where('namaKlien', 'like', '%' . $keyword . '%')
    //         ->paginate(4);
    //     // $mydata = dataKlien::with('jenisKlien')->paginate(4);
    //     //$mydata = dataKlien::with('jenisKlien')->get();
    //     return Inertia::render('Item Quotation/Data Klien/Klien', [
    //         // 'Mydata' => dataKlien::whereHas('jenisKlien', function ($query) use ($keyword) {
    //         //     $query->where('namaKlien', 'LIKE', '%' . $keyword . '%');
    //         // }) ->paginate(4),
    //         'Mydata' => $mydata,
    //         'jenisKlien' => $jenisKlien,
    //     ]);
    // }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\dataKlien  $dataKlien
     * @return \Illuminate\Http\Response
     */
    public function edit(dataKlien $Mydata, Request $request)
    {
        return Inertia::render('Item Quotation/Data Klien/Klien', [
            'Mydata' => $Mydata->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\dataKlien  $dataKlien
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        dataKlien::where('id', $request->id)->update([
            'namaKlien' => $request->namaKlien,
            'alamatKlien' => $request->alamatKlien,
            'tlpKlien' => $request->tlpKlien,
            'namaPicKlien' => $request->namaPicKlien,
            'tlpPicKlien' => $request->tlpPicKlien,
            'jenis_klien_id' => $request->jenis_klien_id,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\dataKlien  $dataKlien
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Mydata = dataKlien::find($request->id);
        $Mydata->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
