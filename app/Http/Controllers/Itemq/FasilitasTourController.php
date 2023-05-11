<?php

namespace App\Http\Controllers\Itemq;

use App\Models\Itemq\fasilitasTour;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class FasilitasTourController extends Controller
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
        $Mydata = new fasilitasTour();
        $Mydata->ketFasilitas = $request->ketFasilitas;
        $Mydata->biayaFasilitas = $request->biayaFasilitas;
        $Mydata->satuan = $request->satuan;
        $Mydata->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\fasilitasTour  $fasilitasTour
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        return Inertia::render('Item Quotation/Fasilitas Tour/FasilitasTour', [
            'Mydata' => fasilitasTour::when($request->term, function ($query, $term) {
                $query->where('ketFasilitas', 'LIKE', "%{$term}%");
            }) ->paginate(4)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\fasilitasTour  $fasilitasTour
     * @return \Illuminate\Http\Response
     */
    public function edit(fasilitasTour $Mydata, Request $request)
    {
        return Inertia::render('Item Quotation/Fasilitas Tour/FasilitasTour', [
            'Mydata' => $Mydata->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\fasilitasTour  $fasilitasTour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        fasilitasTour::where('id', $request->id)->update([
            'ketFasilitas' => $request->ketFasilitas,
            'biayaFasilitas' => $request->biayaFasilitas,
            'satuan' => $request->satuan,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\fasilitasTour  $fasilitasTour
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Mydata = fasilitasTour::find($request->id);
        $Mydata->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
