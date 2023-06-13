<?php

namespace App\Models\Akses;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class userAdmin extends Model
{
    use HasFactory;

    protected $table = "user_admins";
    protected $primaryKey = "id";
    protected $fillable = [
        'namaAdmin',
        'tlpAdmin',
        'statusAdmin',
        'idUser',
    ];

    // yang punya id one to one
    public function user()
    {
        return $this->belongsTo(User::class, 'idUser', 'id');
    }
}
