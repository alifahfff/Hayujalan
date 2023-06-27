<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vendor\vendorDestinasiWisata;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\quotationRekomendasi;

class TDestinasiWisata extends Model
{
    use HasFactory;

    protected $table = 'T_destinasiWisata';
    protected $primaryKey = 'idTdestinasiWisata';
    protected $fillable = [
        'idQuotationTransaksi',
        'idDestinasiWisata',
        'namaTdestinasiWisata',
        'hargaTdestinasiWisata',
        'jumlahTdestinasiWisata',
        'qtyTdestinasiWisata',
        'jmlHariTdestinasiWisata',
    ];

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function destinasi()
    {
        return $this->belongsTo(vendorDestinasiWisata::class, 'idDestinasiWisata', 'idDestinasiWisata');
    }

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }
}
