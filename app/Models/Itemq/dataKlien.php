<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotation\quotationTour;

class dataKlien extends Model
{
    use HasFactory;

    protected $table = 'M_dataJenisKlien';
    protected $primaryKey = 'idJenisKlien';
    protected $fillable = [
        'namaJenisKlien',
    ];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function jenisKlien()
    {
        return $this->belongsTo(dataJenisKlien::class, 'idJenisKlien', 'idJenisKlien');
    }
    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idDataKlien', 'idDataKlien');
    }
}
