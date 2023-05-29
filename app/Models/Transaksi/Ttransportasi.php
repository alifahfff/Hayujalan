<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vendor\vendorTransportasi;
use App\Models\Quotation\quotationTransaksi;

class Ttransportasi extends Model
{
    use HasFactory;

    protected $table = "ttransportasis";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function transportasi()
    {
        return $this->belongsTo(vendorTransportasi::class, 'idTransportasi', 'id');
    }

    // nggak punya id
    public function qtransaksi()
    {
        return $this->hasMany(quotationTransaksi::class, 'idTtransportasi', 'id');
    }
}
