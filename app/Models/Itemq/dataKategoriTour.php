<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotation\quotationTour;

class dataKategoriTour extends Model
{
    use HasFactory;

    protected $table = "data_kategori_tours";
    protected $primaryKey = "id";

     // nggak punya id
    // jenis klien mempunyai banyak klien
    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idKategoriTour', 'id');
    }
}
