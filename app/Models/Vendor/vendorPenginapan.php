<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        return $this->belongsTo(areaWisata::class, 'idAreaWIsata', 'id');
    }
}
