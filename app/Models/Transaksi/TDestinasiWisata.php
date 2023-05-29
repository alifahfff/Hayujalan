<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vendor\vendorDestinasiWisata;
use App\Models\Quotation\quotationTransaksi;

class TDestinasiWisata extends Model
{
    use HasFactory;

    protected $table = "t_destinasi_wisatas";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function destinasi()
    {
        return $this->belongsTo(vendorDestinasiWisata::class, 'idDestinasiWisata', 'id');
    }

    // nggak punya id
    public function qtransaksi()
    {
        return $this->hasMany(quotationTransaksi::class, 'idTDestinasiWisata', 'id');
    }
}
