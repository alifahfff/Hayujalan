<?php

namespace App\Http\Controllers\Report;

use Inertia\Inertia;
use App\Models\Report\Report;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $keyword = $request->input('key');
        $mydata = Report::with('qtransaksi')
                ->where('namaProject', 'like', '%' . $keyword . '%')
                ->paginate(4);
        return Inertia::render('Laporan/LaporanQuotation', [
            'Mydata' => $mydata,
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
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $keyword = $request->input('key');
        $mydata = Report::with('qtransaksi.quotation.klien')
                ->where('namaProject', 'like', '%' . $keyword . '%')
                ->paginate(4);
        return Inertia::render('Report/Reports', [
            'Mydata' => $mydata,
        ]);
        // return Inertia::render('Report/Report');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Report $report)
    {
        Report::where('id', $request->id)->update([
            'nilaiKlien' => $request->nilaiKlien,
            'statusBerjalan' => $request->statusBerjalan,
            'feedback' => $request->feedback,
        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function destroy(Report $report)
    {
        //
    }
}
