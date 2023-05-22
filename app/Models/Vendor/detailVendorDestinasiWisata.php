<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detailVendorDestinasiWisata extends Model
{
    use HasFactory;

    protected $table = "detail_vendor_destinasi_wisatas";
    protected $primaryKey = "id";

    public function vendorDW()
    {
        return $this->hasMany(detailVendorDestinasiWisata::class, 'idDestinasiWisata', 'id');
    }
}
