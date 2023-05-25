<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vendorDestinasiWisata extends Model
{
    use HasFactory;

    protected $table = "vendor_destinasi_wisatas";
    protected $primaryKey = "id";

    // nggak punya id
    public function detaildw()
    {
        return $this->hasMany(detailVendorDestinasiWisata::class, 'idDestinasiWisata', 'id');
    }

    // yang punya id one to many
    public function AWdestinasi()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWisata', 'id');
    }
}
