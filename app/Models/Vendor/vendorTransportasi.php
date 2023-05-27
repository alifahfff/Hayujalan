<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\Ttransportasi;

class vendorTransportasi extends Model
{
    use HasFactory;

    protected $table = "vendor_transportasis";
    protected $primaryKey = "id";

    // nggak punya id
    public function detailTransportasi()
    {
        return $this->hasMany(detailVendorTransportasi::class, 'idTransportasi', 'id');
    }

    // yang punya id one to many
    public function AWtransportasi()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWIsata', 'id');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function ttransportasi()
    {
        return $this->hasMany(Ttransportasi::class, 'idTransportasi', 'id');
    }
}
