<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class jenisTransportasi extends Model
{
    use HasFactory;

    protected $table = 'jenisTransportasi';
    protected $primaryKey = 'idJenisTransportasi';
    public $timestamps = false;

    protected $fillable = [
        'namaJenis',
        'penggunaanUnit',
        'crew',
        'maxKapasitas',
    ];

    // nggak punya id
    public function detailJTransportasi()
    {
        return $this->hasMany(detailVendorTransportasi::class, 'idJenisTransportasi', 'idJenisTransportasi');
    }
}
