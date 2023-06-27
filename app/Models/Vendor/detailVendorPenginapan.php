<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detailVendorPenginapan extends Model
{
    use HasFactory;

    protected $table = 'M_detailVendorPenginapan';
    protected $primaryKey = 'idDetailPenginapan';
    public $timestamps = true;

    protected $fillable = [
        'idPenginapan',
        'namaJenisKamar',
        'kapasitasKamar',
        'qtyKetersediaanKamar',
        'hargaSewaWeekdayPerKamar',
        'hargaSewaWeekendPerKamar',
        'expiredDetailPenginapan',
        'statusDetailPenginapan',
        'tglUpdateDetailPenginapan',
    ];
    
    // yang punya id one to many
    public function penginapan()
    {
        return $this->belongsTo(vendorPenginapan::class, 'idPenginapan', 'idPenginapan');
    }
}
