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

    protected $table = 'T_event';
    protected $primaryKey = 'idTevent';
    protected $fillable = [
        'idDataEvent',
        'idQuotationTransaksi',
        'namaTevent',
        'hargaTevent',
        'jumlahTevent',
        'qtyTevent',
        'jmlHariTevent',
        'created_at',
        'updated_at',
    ];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function event()
    {
        return $this->belongsTo(dataEvent::class, 'idDataEvent', 'idDataEvent');
    }

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }
}
