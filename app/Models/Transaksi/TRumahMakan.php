<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vendor\vendorRumahMakan;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\quotationRekomendasi;

class TRumahMakan extends Model
{
    use HasFactory;

    protected $table = "t_rumah_makans";
    protected $primaryKey = "id";
    protected $fillable = [
        'idRM',
        'qty',
        'hari',
        'harga',
        'jumlah',
        'keterangan',
        'idQuotationTransaksion',
        'created_at',
        'idQuotationRekomendasi',
        'updated_at'
    ];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function rumahMakan()
    {
        return $this->belongsTo(vendorRumahMakan::class, 'idRm', 'id');
    }

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksion', 'id');
    }

    public function qrekomendasi()
    {
        return $this->belongsTo(quotationRekomendasi::class, 'idQuotationRekomendasi', 'id');
    }
}
