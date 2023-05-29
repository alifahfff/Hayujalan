<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class jenisTransportasi extends Model
{
    use HasFactory;

    protected $table = "jenis_transportasis";
    protected $primaryKey = "id";

    // nggak punya id
    public function detailJTransportasi()
    {
        return $this->hasMany(detailVendorTransportasi::class, 'idJenisTransportasi', 'id');
    }
}
