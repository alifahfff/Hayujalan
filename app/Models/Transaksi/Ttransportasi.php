<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vendor\vendorTransportasi;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\quotationRekomendasi;

class Ttransportasi extends Model
{
    use HasFactory;

    protected $table = 'T_transportasi';
    protected $primaryKey = 'idTtransportasi';
    public $timestamps = false;

    protected $fillable = [
        'idQuotationTransaksi',
        'idTransportasi',
        'namaTtransportasi',
        'hargaTtransportasi',
        'jumlahTtransportasi',
        'qtyTtransportasi',
        'jmlHariTtransportasi',
        'ketTranportasi',
        'created_at',
        'updated_at',
    ];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function transportasi()
    {
        return $this->belongsTo(vendorTransportasi::class, 'idTransportasi', 'idTransportasi');
    }

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }
}
