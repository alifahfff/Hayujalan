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

    protected $table = 'T_rumahMakan';
    protected $primaryKey = 'idTrm';
    public $timestamps = true;

    protected $fillable = [
        'idQuotationTransaksi',
        'idRM',
        'namaTrm',
        'hargaTrm',
        'jumlahTrm',
        'qtyTrm',
        'jmlHariTrm',
        'ketRm',
        'created_at',
        'updated_at',
    ];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function rumahMakan()
    {
        return $this->belongsTo(vendorRumahMakan::class, 'idRm', 'idRm');
    }

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }
}
