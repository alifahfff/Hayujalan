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

    protected $table = "t_fasilitas_tours";
    protected $primaryKey = "id";
    protected $fillable = [
        'idFasilitasTour',
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
    public function fasilitasTour()
    {
        return $this->belongsTo(fasilitasTour::class, 'idFasilitasTour', 'id');
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
