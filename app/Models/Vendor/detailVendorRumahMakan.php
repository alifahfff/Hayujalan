<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detailVendorRumahMakan extends Model
{
    use HasFactory;

    protected $table = "detail_vendor_rumah_makans";
    protected $primaryKey = "id";

    // yang punya id one to many
    public function vendorRM()
    {
        return $this->belongsTo(vendorRumahMakan::class, 'idRM', 'id');
    }
}
