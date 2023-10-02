<?php

namespace App\Http\Controllers\Itemq;

use App\Models\Itemq\dataKategoriTour;
use App\Models\Quotation\dataBobot;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DataKategoriTourController extends Controller
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
        $count = DataBobot::where('idKriteria', '=', 2)->max('jumlahBobot');

        $bobot = dataBobot::create([
            'idKriteria' => 2,
            'namaBobot' => $request->namaKategoriTour,
            'jumlahBobot' => $count + 1,
        ]);

        $Mydata = new dataKategoriTour();
        $Mydata->namaKategoriTour = $request->namaKategoriTour;
        $Mydata->presentaseKeuntungan = $request->presentaseKeuntungan;
        $Mydata->idBobot = $bobot->idBobot;
        $Mydata->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\dataKategoriTour  $dataKategoriTour
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        return Inertia::render('Item Quotation/Kategori Tour/KategoriTour', [
            'Mydata' => dataKategoriTour::when($request->term, function ($query, $term) {
                $query->where('namaKategoriTour', 'LIKE', "%{$term}%");
            }) ->paginate(10)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\dataKategoriTour  $dataKategoriTour
     * @return \Illuminate\Http\Response
     */
    public function edit(dataKategoriTour $Mydata, Request $request)
    {
        return Inertia::render('Item Quotation/Kategori Tour/KategoriTour', [
            'Mydata' => $Mydata->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\dataKategoriTour  $dataKategoriTour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        dataKategoriTour::where('idKategoriTour', $request->id)->update([
            'namaKategoriTour' => $request->namaKategoriTour,
            'presentaseKeuntungan' => $request->presentaseKeuntungan,
            'idBobot' => $request->idBobot,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\dataKategoriTour  $dataKategoriTour
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Mydata = dataKategoriTour::find($request->id);
        $Mydata->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
