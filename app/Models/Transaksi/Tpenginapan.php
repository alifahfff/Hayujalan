<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vendor\vendorPenginapan;
use App\Models\Quotation\quotationTransaksi;

class Tpenginapan extends Model
{
    use HasFactory;

    protected $table = "tpenginapans";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function penginapan()
    {
        return $this->belongsTo(vendorPenginapan::class, 'idPenginapan', 'id');
    }

    // nggak punya id
    public function qtransaksi()
    {
        return $this->hasMany(quotationTransaksi::class, 'idTpenginapan', 'id');
    }
}
