<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Akses\roles;
use App\Models\Quotation\quotationTour;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'M_user';
    protected $primaryKey = 'idUser';
    // public $incrementing = false;
    // public $timestamps = true;
    
    protected $fillable = ['email', 'password', 'namaUser', 'idRoles'];

     /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        // 'remember_token',
    ];

    // public function setPassword($password)
    // {
    //     $this->password = $password;
    //     $this->hashed_password = md5($password); // Menggunakan md5 untuk menghash password
    // }

    public function login($email, $password)
    {
        $user = \DB::table($this->table)
            ->where('Email', $email)
            ->first();
        // dd($user, $password);
        if ($user && $password === $user->Password) {
            Auth::loginUsingId($user->idUser);

            return true;
        }

        return false;
    }

    // yang punya id one to many
    public function roles()
    {
        return $this->belongsTo(roles::class, 'idRoles', 'idRoles');
    }
    
    public function userQuotations()
    {
        return $this->belongsToMany(quotationTour::class, 'user_quotation', 'idUser', 'idQuotationTour');
    }
}
