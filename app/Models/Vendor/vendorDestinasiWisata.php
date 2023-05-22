<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vendorDestinasiWisata extends Model
{
    use HasFactory;

    protected $table = "vendor_destinasi_wisatas";
    protected $primaryKey = "id";

    public function detaildw()
    {
        return $this->belongsTo(vendorDestinasiWisata::class, 'idDestinasiWisata', 'id');
    }
}
