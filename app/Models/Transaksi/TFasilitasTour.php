<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\fasilitasTour;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\quotationRekomendasi;

class TFasilitasTour extends Model
{
    use HasFactory;

    protected $table = 'T_fasilitasTour';
    protected $primaryKey = 'idTft';
    protected $fillable = [
        'idFasilitasTour',
        'idQuotationTransaksi',
        'namaTft',
        'hargaTft',
        'jumlahTft',
        'qtyTft',
        'jmlHariTft',
        'created_at',
        'updated_at',
    ];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function fasilitasTour()
    {
        return $this->belongsTo(fasilitasTour::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'id');
    }
}
