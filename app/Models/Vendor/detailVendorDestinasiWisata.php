<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detailVendorDestinasiWisata extends Model
{
    use HasFactory;

    protected $table = 'detailVendorDestinasiWisata';
    protected $primaryKey = 'idDetailDestinasiWisata';
    public $incrementing = false;
    protected $fillable = [
        'idDestinasiWisata',
        'rangePeserta',
        'tiketMasukWeekday',
        'tiketMasukWeekend',
        'jenisPeserta',
        'expireDetailDestinasi',
        'statusDetailDestinasi',
        'tglUpdateDetailDestinasi',
    ];

    // yang punya id one to many
    public function vendorDW()
    {
        return $this->belongsTo(vendorDestinasiWisata::class, 'idDestinasiWisata', 'idDestinasiWisata');
    }
}
