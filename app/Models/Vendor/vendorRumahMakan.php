<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vendorRumahMakan extends Model
{
    use HasFactory;

    protected $table = "vendor_rumah_makans";
    protected $primaryKey = "id";

    // nggak punya id
    public function detailRM()
    {
        return $this->hasMany(detailVendorRumahMakan::class, 'idRM', 'id');
    }

    // yang punya id one to many
    public function areaWisataRm()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWIsata', 'id');
    }
}
