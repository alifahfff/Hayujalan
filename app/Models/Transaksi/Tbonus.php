<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\dataBonus;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\quotationRekomendasi;

class Tbonus extends Model
{
    use HasFactory;

    protected $table = 'T_bonus';
    protected $primaryKey = 'idTbonus';
    protected $fillable = [
        'idQuotationTransaksi',
        'idDataBonus',
        'namaTbonus',
        'hargaTbonus',
        'jumlahTbonus',
        'qtyTbonus',
        'jmlHariTbonus',
        'created_at',
        'updated_at',
    ];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function bonus()
    {
        return $this->belongsTo(dataBonus::class, 'idDataBonus', 'idDataBonus');
    }

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }
}
