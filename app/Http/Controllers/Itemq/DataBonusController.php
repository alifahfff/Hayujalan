<?php

namespace App\Http\Controllers\Itemq;

use App\Models\Itemq\dataBonus;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DataBonusController extends Controller
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
        $Mydata = new dataBonus();
        $Mydata->ketDataBonus = $request->ketDataBonus;
        $Mydata->biayaDataBonus = $request->biayaDataBonus;
        $Mydata->satuan = $request->satuan;
        $Mydata->tglBerlakuItem = $request->tglBerlakuItem;
        $Mydata->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\dataBonus  $dataBonus
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        return Inertia::render('Item Quotation/Data Bonus/DataBonus', [
            'Mydata' => dataBonus::when($request->term, function ($query, $term) {
                $query->where('ketDataBonus', 'LIKE', "%{$term}%");
            }) ->paginate(4)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\dataBonus  $dataBonus
     * @return \Illuminate\Http\Response
     */
    public function edit(dataBonus $Mydata, Request $request)
    {
        return Inertia::render('Item Quotation/Data Bonus/DataBonus', [
            'Mydata' => $Mydata->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\dataBonus  $dataBonus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        dataBonus::where('id', $request->id)->update([
            'ketDataBonus' => $request->ketDataBonus,
            'biayaDataBonus' => $request->biayaDataBonus,
            'satuan' => $request->satuan,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\dataBonus  $dataBonus
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Mydata = dataBonus::find($request->id);
        $Mydata->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
