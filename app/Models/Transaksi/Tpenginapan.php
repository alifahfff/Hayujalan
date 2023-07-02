<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vendor\vendorPenginapan;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\quotationRekomendasi;

class Tpenginapan extends Model
{
    use HasFactory;

    protected $table = 'T_penginapan';
    protected $primaryKey = 'idTpenginapan';
    public $timestamps = true;

    protected $fillable = [
        'idQuotationTransaksi',
        'idPenginapan',
        'namaTpenginapan',
        'hargaTpenginapan',
        'jumlahTpenginapan',
        'qtyTpenginapan',
        'jmlHariTpenginapan',
        'ketPenginapan',
        'created_at',
        'updated_at',
    ];


    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function penginapan()
    {
        return $this->belongsTo(vendorPenginapan::class, 'idPenginapan', 'idPenginapan');
    }

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }
}
