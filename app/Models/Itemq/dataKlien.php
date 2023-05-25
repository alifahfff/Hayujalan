<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dataKlien extends Model
{
    use HasFactory;

    protected $table = "data_kliens";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function jenisKlien()
    {
        return $this->belongsTo(dataJenisKlien::class, 'jenis_klien_id', 'id');
    }
    
}
