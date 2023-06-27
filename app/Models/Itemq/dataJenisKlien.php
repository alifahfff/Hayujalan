<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dataJenisKlien extends Model
{
    use HasFactory;

    protected $table = 'M_dataJenisKlien';
    protected $primaryKey = 'idJenisKlien';
    protected $fillable = [
        'namaJenisKlien',
    ];

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function klien()
    {
        return $this->hasMany(dataKlien::class, 'idJenisKlien', 'idJenisKlien');
    }
    
}
