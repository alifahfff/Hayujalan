<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'idRoles' => 'required|integer|max:30',
            'namaUser' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:M_user',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);


        $M_user = User::create([
            'idRoles' => $request->idRoles,
            'namaUser' => $request->namaUser,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // dd($request->idRoles);

        event(new Registered($M_user));

        Auth::login($M_user);

        // dd($user);
        
        $M_user->idRoles = $request->idRoles;
        $M_user->save();

        //dd($request);
        return redirect("/homepage");
    }
}
