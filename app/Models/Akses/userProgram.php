<?php

namespace App\Models\Akses;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Quotation\quotationTour;

class userProgram extends Model
{
    use HasFactory;

    protected $table = "user_programs";
    protected $primaryKey = "id";

    // yang punya id one to one
    public function user()
    {
        return $this->belongsTo(User::class, 'idUser', 'id');
    }

     // nggak punya id
    // jenis klien mempunyai banyak klien
    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idUserProgram', 'id');
    }
}
