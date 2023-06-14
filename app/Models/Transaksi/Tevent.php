<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\dataEvent;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\quotationRekomendasi;

class Tevent extends Model
{
    use HasFactory;

    protected $table = "tevents";
    protected $primaryKey = "id";
    protected $fillable = [
        'idDataEvent',
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
    public function event()
    {
        return $this->belongsTo(dataEvent::class, 'idDataEvent', 'id');
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
