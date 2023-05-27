<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotation\quotationTour;

class areaWisata extends Model
{
    use HasFactory;

    protected $table = "area_wisatas";
    protected $primaryKey = "id";

    // nggak punya id
    public function VRm()
    {
        return $this->hasMany(vendorRumahMakan::class, 'idAreaWIsata', 'id');
    }

    // nggak punya id
    public function Vpenginapan()
    {
        return $this->hasMany(vendorPenginapan::class, 'idAreaWIsata', 'id');
    }

    // nggak punya id
    public function Vtransportasi()
    {
        return $this->hasMany(vendorTransportasi::class, 'idAreaWIsata', 'id');
    }

    // nggak punya id
    public function Vdestinasi()
    {
        return $this->hasMany(vendorDestinasiWisata::class, 'idAreaWisata', 'id');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idAreaWisata', 'id');
    }
}
