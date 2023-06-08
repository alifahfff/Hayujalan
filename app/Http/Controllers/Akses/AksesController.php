<?php

namespace App\Http\Controllers\Akses;

use Inertia\Inertia;
use App\Models\Akses\Akses;
use App\Models\Akses\roles;
use App\Models\Akses\userKeuangan;
use App\Models\Akses\userSales;
use App\Models\Akses\userProgram;
use App\Models\Akses\userAdmin;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AksesController extends Controller
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

    public function akses()
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
        $klien = dataKlien::create([
            'jenis_klien_id' => 1,
            'namaKlien' => $request->namaKlien,
        ]);

        $rekomendasi = new hasilQRekomendasi([
            'b_areaWisata' => $request->b_areaWisata,
            'b_kategori' => $request->b_kategori,
            'b_budget' => $request->b_budget,
            'b_durasi' => $request->b_durasi,
            'b_jumlahOrang' => $request->b_jumlahOrang,
            'idDataKlien' => $klien->id,
        ]);

        $rekomendasi->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Akses  $akses
     * @return \Illuminate\Http\Response
     */
    public function show(Akses $akses)
    {   
        $roles = roles::all();
        $mydata = User::with('roles')
            ->paginate(4);
        $sales = userSales::all();
        $keuangan = userKeuangan::all();
        $program = userProgram::all();
        $admin = userAdmin::all();
        $user = [
            'keuangan' => $keuangan, 
            'program' => $program, 
            'sales' => $sales,
            'admin' => $admin,
        ];
        return Inertia::render('Hak Akses/Akses', [
            'Mydata' => $mydata,
            'roles' => $roles,
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Akses  $akses
     * @return \Illuminate\Http\Response
     */
    public function edit(Akses $akses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Akses  $akses
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Akses $akses)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Akses  $akses
     * @return \Illuminate\Http\Response
     */
    public function destroy(Akses $akses)
    {
        //
    }
}
