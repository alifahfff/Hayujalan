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
use Carbon\Carbon;

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
    public function storeAdmin(Request $request)
    {
        $users = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'idRoles' => $request->idRoles,
            'password' => $request->password,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $admins = new userAdmin([
            'namaAdmin' => $request->name,
            'tlpAdmin' => $request->telepon,
            'statusAdmin' => $request->status,
            'idUser' => $users->id,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $admins->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    public function storeKeuangan(Request $request)
    {
        $users = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'idRoles' => $request->idRoles,
            'password' => $request->password,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $keuangan = new userKeuangan([
            'namaKeuangan' => $request->name,
            'tlpKeuangan' => $request->telepon,
            'statusKeuangan' => $request->status,
            'idUser' => $users->id,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $keuangan->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    public function storeSales(Request $request)
    {
        $users = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'idRoles' => $request->idRoles,
            'password' => $request->password,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $sales = new userSales([
            'namaSales' => $request->name,
            'tlpSales' => $request->telepon,
            'statusSales' => $request->status,
            'idUser' => $users->id,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $sales->save();
        return redirect()->back()->with('message', 'item berhasil dibuat');
    }

    public function storeProgram(Request $request)
    {
        $users = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'idRoles' => $request->idRoles,
            'password' => $request->password,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $program = new userProgram([
            'namaPrograms' => $request->name,
            'tlpPrograms' => $request->telepon,
            'statusPrograms' => $request->status,
            'idUser' => $users->id,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $program->save();
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
        $sales = user::all();
        $keuangan = user::all();
        $program = user::all();
        $admin = user::all();
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
    public function updateAdmin(Request $request)
    {
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'idRoles' => $request->idRoles,
            'password' => $request->password,
            'updated_at' => Carbon::now(),
        ]);
        userAdmin::where('id', $request->idAdmin)->update([
            'namaAdmin' => $request->name,
            'tlpAdmin' => $request->telepon,
            'statusAdmin' => $request->status,
            'updated_at' => Carbon::now(),
        ]);

        // dd($request);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    public function updateKeuangan(Request $request)
    {
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'idRoles' => $request->idRoles,
            'password' => $request->password,
            'updated_at' => Carbon::now(),
        ]);
        userKeuangan::where('id', $request->idKeuangan)->update([
            'namaKeuangan' => $request->name,
            'tlpKeuangan' => $request->telepon,
            'statusKeuangan' => $request->status,
            'updated_at' => Carbon::now(),
        ]);

        // dd($request);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    public function updateSales(Request $request)
    {
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'idRoles' => $request->idRoles,
            'password' => $request->password,
            'updated_at' => Carbon::now(),
        ]);
        userSales::where('id', $request->idSales)->update([
            'namaSales' => $request->name,
            'tlpSales' => $request->telepon,
            'statusSales' => $request->status,
            'updated_at' => Carbon::now(),
        ]);

        // dd($request);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    public function updateProgram(Request $request)
    {
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'idRoles' => $request->idRoles,
            'password' => $request->password,
            'updated_at' => Carbon::now(),
        ]);
        userProgram::where('id', $request->idProgram)->update([
            'namaPrograms' => $request->name,
            'tlpPrograms' => $request->telepon,
            'statusPrograms' => $request->status,
            'updated_at' => Carbon::now(),
        ]);

        // dd($request);
        return redirect()->back()->with('message', 'item berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Akses  $akses
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Mydata = User::find($request->id);
        $Mydata->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
