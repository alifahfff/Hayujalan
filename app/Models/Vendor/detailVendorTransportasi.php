<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detailVendorTransportasi extends Model
{
    use HasFactory;

    protected $table = 'M_detailVendorTransportasi';
    protected $primaryKey = 'idDetailTransportasi';
    public $timestamps = false;

    protected $fillable = [
        'idJenisTransportasi',
        'idTransportasi',
        'nama',
        'tahun',
        'kapasitas',
        'qtyKetersediaan',
        'hargaSewaWeekendDalamKota',
        'hargaSewaWeekdayDalamKota',
        'hargaSewaWeekenLuarKota',
        'hargaSewaWeekdayLuarKota',
        'urlInterior',
        'urlEksterior',
        'expiredDetailTransportasi',
        'statusDetailTransportasi',
        'tglUpdateDetailTransportasi',
    ];
   

    // yang punya id one to many
    public function transportasi()
    {
        return $this->belongsTo(vendorTransportasi::class, 'idTransportasi', 'idTransportasi');
    }

    // yang punya id one to many
    public function jenisTransportasi()
    {
        return $this->belongsTo(jenisTransportasi::class, 'idJenisTransportasi', 'idJenisTransportasi');
    }
}
