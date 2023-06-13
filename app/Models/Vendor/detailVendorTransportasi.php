<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detailVendorTransportasi extends Model
{
    use HasFactory;

    protected $table = "detail_vendor_transportasis";
    protected $primaryKey = "id";
   

    // yang punya id one to many
    public function transportasi()
    {
        return $this->belongsTo(vendorTransportasi::class, 'idTransportasi', 'id');
    }

    // yang punya id one to many
    public function jenisTransportasi()
    {
        return $this->belongsTo(jenisTransportasi::class, 'idJenisTransportasi', 'id');
    }
}
