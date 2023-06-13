<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detailVendorPenginapan extends Model
{
    use HasFactory;

    protected $table = "detail_vendor_penginapans";
    protected $primaryKey = "id";
    
    // yang punya id one to many
    public function penginapan()
    {
        return $this->belongsTo(vendorPenginapan::class, 'idPenginapan', 'id');
    }
}
