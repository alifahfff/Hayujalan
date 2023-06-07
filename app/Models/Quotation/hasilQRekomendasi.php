<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hasilQRekomendasi extends Model
{
    use HasFactory;
    protected $table = "hasil_qrekomendasi";
    protected $primaryKey = "id";
    protected $fillable = [
        'b_areaWisata',
        'b_kategori',
        'b_budget',
        'b_durasi',
        'b_jumlahOrang',
        'idDataKlien',
    ];
}
