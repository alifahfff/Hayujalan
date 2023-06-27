<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\Ttransportasi;

class vendorTransportasi extends Model
{
    use HasFactory;

    protected $table = 'M_vendorTransportasi';
    protected $primaryKey = 'idTransportasi';
    public $timestamps = false;

    protected $fillable = [
        'idAreaWisata',
        'namaTransportasi',
        'alamatTransportasi',
        'tlpTransportasi',
        'picTransportasi',
        'hpPicTransportasi',
        'tglBerlakuTransportasi',
        'createdTransportasi',
        'updatedTransportasi',
    ];
    // nggak punya id
    public function detailTransportasi()
    {
        return $this->hasMany(detailVendorTransportasi::class, 'idTransportasi', 'idTransportasi');
    }

    // yang punya id one to many
    public function AWtransportasi()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWisata', 'idAreaWisata');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function ttransportasi()
    {
        return $this->hasMany(Ttransportasi::class, 'idTransportasi', 'idTransportasi');
    }
}
