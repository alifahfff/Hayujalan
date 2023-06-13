<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Akses\roles;
use App\Models\Akses\userKeuangan;
use App\Models\Akses\userProgram;
use App\Models\Akses\userSales;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        // 'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $table = "users";
    protected $primaryKey = "id";
    protected $fillable = ['name','email','created_at','updated_at','password', 'idRoles', 'hashed_password'];

    public function setPassword($password)
    {
        $this->password = $password;
        $this->hashed_password = md5($password); // Menggunakan md5 untuk menghash password
    }
    // yang punya id one to many
    public function roles()
    {
        return $this->belongsTo(roles::class, 'idRoles', 'id');
    }

    // 1 user keuangan hanya memiliki 1 user
    // yang nggak punya id one to one
    public function keuangan() 
	{
		return $this->hasOne(userKeuangan::class, 'idUser', 'id');
	}

    public function program() 
	{
		return $this->hasOne(userProgram::class, 'idUser', 'id');
	}

    public function sales() 
	{
		return $this->hasOne(userSales::class, 'idUser', 'id');
	}

    public function admin() 
	{
		return $this->hasOne(userAdmin::class, 'idUser', 'id');
	}
}
