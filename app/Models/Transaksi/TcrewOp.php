<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\crewOperasional;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\quotationRekomendasi;

class TcrewOp extends Model
{
    use HasFactory;

    protected $table = 'T_crew';
    protected $primaryKey = 'idTcrew';
    protected $fillable = [
        'idCrewOperasional',
        'idQuotationTransaksi',
        'namaTcrew',
        'hargaTcrew',
        'jumlahTcrew',
        'qtyTcrew',
        'jmlHariTcrew',
    ];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function crew()
    {
        return $this->belongsTo(crewOperasional::class, 'idCrewOperasional', 'idCrewOperasional');
    }

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }
}
