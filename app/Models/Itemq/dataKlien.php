<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotation\quotationTour;

class dataKlien extends Model
{
    use HasFactory;

    protected $table = "data_kliens";
    protected $primaryKey = "id";
    protected $fillable = ['namaKlien', 'jenis_klien_id'];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function jenisKlien()
    {
        return $this->belongsTo(dataJenisKlien::class, 'jenis_klien_id', 'id');
    }

    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idDataKlien', 'id');
    }
    
}
