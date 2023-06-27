<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\TDestinasiWisata;

class vendorDestinasiWisata extends Model
{
    use HasFactory;

    protected $table = 'M_vendorDestinasiWisata';
    protected $primaryKey = 'idDestinasiWisata';
    public $incrementing = false;
    protected $fillable = [
        'idAreaWisata',
        'namaDestinasiWisata',
        'kapasitasDestinasiWisata',
        'alamatDestinasiWisata',
        'tlpDestinasiWisata',
        'picDestinasiWisata',
        'hpDestinasiWisata',
        'kapasitasParkirBusWisata',
        'linkGmapDestinasiWisata',
        'kapasitasParkirBus',
        'tglBerlakuDestinasi',
    ];

    // nggak punya id
    public function detaildw()
    {
        return $this->hasMany(detailVendorDestinasiWisata::class, 'idDestinasiWisata', 'idDestinasiWisata');
    }

    // yang punya id one to many
    public function AWdestinasi()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWisata', 'idAreaWisata');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tdestinasi()
    {
        return $this->hasMany(TDestinasiWisata::class, 'idDestinasiWisata', 'idDestinasiWisata');
    }
}
