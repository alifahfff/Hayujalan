<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotation\quotationTour;
use App\Models\Quotation\dataBobot;

class dataKategoriTour extends Model
{
    use HasFactory;

    protected $table = 'M_dataKategoriTour';
    protected $primaryKey = ['idBobot', 'idKategoriTour'];
    protected $fillable = [
        'idBobot',
        'namaKategoriTour',
        'presentaseKeuntungan',
    ];

     // nggak punya id
    // jenis klien mempunyai banyak klien
    public function mBobot()
    {
        return $this->belongsTo(dataBobot::class, 'idBobot', 'idBobot');
    }
    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idKategoriTour', 'idKategoriTour');
    }
}
