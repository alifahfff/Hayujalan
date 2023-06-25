<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotation\quotationTour;
use App\Models\Quotation\dataBobot;

class areaWisata extends Model
{
    use HasFactory;

    protected $table = 'M_areaWisata';
    protected $primaryKey = 'idAreaWisata';
    protected $fillable = [
        'idBobot',
        'namaArea',
    ];

    // nggak punya id
    public function VRm()
    {
        return $this->hasMany(vendorRumahMakan::class, 'idAreaWIsata', 'idAreaWisata');
    }

    // nggak punya id
    public function Vpenginapan()
    {
        return $this->hasMany(vendorPenginapan::class, 'idAreaWIsata', 'idAreaWisata');
    }

    // nggak punya id
    public function Vtransportasi()
    {
        return $this->hasMany(vendorTransportasi::class, 'idAreaWIsata', 'idAreaWisata');
    }

    // nggak punya id
    public function Vdestinasi()
    {
        return $this->hasMany(vendorDestinasiWisata::class, 'idAreaWisata', 'idAreaWisata');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idAreaWisata', 'idAreaWisata');
    }

    public function mBobot()
    {
        return $this->belongsTo(dataBobot::class, 'idBobot', 'idBobot');
    }
}
