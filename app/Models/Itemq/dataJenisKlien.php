<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dataJenisKlien extends Model
{
    use HasFactory;

    protected $table = "data_jenis_kliens";
    protected $primaryKey = "id";

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function klien()
    {
        return $this->hasMany(dataKlien::class, 'jenis_klien_id', 'id');
    }
    
}
