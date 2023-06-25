<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\TRumahMakan;

class vendorRumahMakan extends Model
{
    use HasFactory;

    protected $table = 'M_vendorRumahMakan';
    protected $primaryKey = 'idRM';
    public $timestamps = true;

    protected $fillable = [
        'idAreaWisata',
        'namaRM',
        'kapasitasRM',
        'AlamatRM',
        'tlpRM',
        'picRM',
        'hpPicRM',
        'kapasitasParkirBusRM',
        'linkGmapsRM',
        'tglBerlakuRm',
    ];

    // nggak punya id
    public function detailRM()
    {
        return $this->hasMany(detailVendorRumahMakan::class, 'idRM', 'idRM');
    }

    // yang punya id one to many
    public function areaWisataRm()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWisata', 'idAreaWisata');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function trm()
    {
        return $this->hasMany(TRumahMakan::class, 'idRm', 'idRM');
    }
}
