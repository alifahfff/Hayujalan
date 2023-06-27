<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detailVendorRumahMakan extends Model
{
    use HasFactory;

    protected $table = 'detailVendorRumahMakan';
    protected $primaryKey = 'idDetailRM';
    public $timestamps = true;

    protected $fillable = [
        'idRM',
        'namaMenu',
        'detailMenu',
        'hargaMenu',
        'expiredDetailRm',
        'statusDetailRm',
        'tglUpdateDetailRm',
    ];
   

    // yang punya id one to many
    public function vendorRM()
    {
        return $this->belongsTo(vendorRumahMakan::class, 'idRM', 'idRM');
    }
}
