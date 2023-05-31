<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\Tpenginapan;

class vendorPenginapan extends Model
{
    use HasFactory;

    protected $table = "vendor_penginapans";
    protected $primaryKey = "id";

    // nggak punya id
    public function detailPenginapan()
    {
        return $this->hasMany(detailVendorPenginapan::class, 'idPenginapan', 'id');
    }

    // yang punya id one to many
    public function AWpenginapan()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWisata', 'id');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tpenginapan()
    {
        return $this->hasMany(Tpenginapan::class, 'idPenginapan', 'id');
    }
}
