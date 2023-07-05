<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Akses\roles;
use App\Models\Quotation\quotationTour;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    // protected $hidden = [
    //     // 'password',
    //     'remember_token',
    // ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    // ];

    protected $table = 'M_users';
    protected $primaryKey = 'idUser';
    public $incrementing = false;
    public $timestamps = true;
    
    protected $fillable = ['email', 'password', 'namaUser', 'idRoles'];

    public function setPassword($password)
    {
        $this->password = $password;
        $this->hashed_password = md5($password); // Menggunakan md5 untuk menghash password
    }
    // yang punya id one to many
    public function roles()
    {
        return $this->belongsTo(roles::class, 'idRoles', 'idRoles');
    }
    public function mQuotationTours()
    {
        return $this->belongsToMany(quotationTour::class, 'user_quotationTour', 'idRoles', 'idUser')
            ->withPivot('idQuotationTour')
            ->withTimestamps();
    }
}
