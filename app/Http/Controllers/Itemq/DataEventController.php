<?php

namespace App\Http\Controllers\Itemq;

use App\Models\Itemq\dataEvent;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DataEventController extends Controller
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
        $Mydata = new dataEvent();
        $Mydata->ketDataEvent = $request->ketDataEvent;
        $Mydata->biayaDataEvent = $request->biayaDataEvent;
        $Mydata->satuan = $request->satuan;
        $Mydata->tglBerlakuItem = $request->tglBerlakuItem;
        $Mydata->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\dataEvent  $dataEvent
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        return Inertia::render('Item Quotation/Data Event/DataEvent', [
            'Mydata' => dataEvent::when($request->term, function ($query, $term) {
                $query->where('ketDataEvent', 'LIKE', "%{$term}%");
            }) ->paginate(4)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\dataEvent  $dataEvent
     * @return \Illuminate\Http\Response
     */
    public function edit(dataEvent $Mydata, Request $request)
    {
        return Inertia::render('Item Quotation/Data Event/DataEvent', [
            'Mydata' => $Mydata->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\dataEvent  $dataEvent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        dataEvent::where('id', $request->id)->update([
            'ketDataEvent' => $request->ketDataEvent,
            'biayaDataEvent' => $request->biayaDataEvent,
            'satuan' => $request->satuan,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\dataEvent  $dataEvent
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Mydata = dataEvent::find($request->id);
        $Mydata->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
