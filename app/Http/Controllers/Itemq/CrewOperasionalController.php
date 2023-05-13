<?php

namespace App\Http\Controllers\Itemq;

use App\Models\Itemq\crewOperasional;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class CrewOperasionalController extends Controller
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
        $crew = new crewOperasional();
        $crew->ketCrewOperasional = $request->ketCrewOperasional;
        $crew->biayaCrewOperasional = $request->biayaCrewOperasional;
        $crew->satuan = $request->satuan;
        $crew->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\crewOperasional  $crewOperasional
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        return Inertia::render('Item Quotation/Crew/ItemCrew', [
            'crew' => crewOperasional::when($request->term, function ($query, $term) {
                $query->where('ketCrewOperasional', 'LIKE', "%{$term}%");
            }) ->paginate(4)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\crewOperasional  $crewOperasional
     * @return \Illuminate\Http\Response
     */
    public function edit(crewOperasional $crew, Request $request)
    {
        return Inertia::render('Item Quotation/Crew/ItemCrew', [
            'myCrew' => $crew->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\crewOperasional  $crewOperasional
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        crewOperasional::where('id', $request->id)->update([
            'ketCrewOperasional' => $request->ketCrewOperasional,
            'biayaCrewOperasional' => $request->biayaCrewOperasional,
            'satuan' => $request->satuan,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\crewOperasional  $crewOperasional
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $crew = crewOperasional::find($request->id);
        $crew->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
