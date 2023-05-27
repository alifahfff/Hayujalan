<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vendor\vendorRumahMakan;
use App\Models\Quotation\quotationTransaksi;

class TRumahMakan extends Model
{
    use HasFactory;

    protected $table = "t_rumah_makans";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function rumahMakan()
    {
        return $this->belongsTo(vendorRumahMakan::class, 'idRm', 'id');
    }

    // nggak punya id
    public function qtransaksi()
    {
        return $this->hasMany(quotationTransaksi::class, 'idTrm', 'id');
    }
}
