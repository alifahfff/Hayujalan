<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\TDestinasiWisata;
use App\Models\Transaksi\Ttransportasi;
use App\Models\Transaksi\Tpenginapan;
use App\Models\Transaksi\TRumahMakan;
use App\Models\Transaksi\TFasilitasTour;
use App\Models\Transaksi\TcrewOp;
use App\Models\Transaksi\Tevent;
use App\Models\Transaksi\Tbonus;
use App\Models\Report\Report;

class quotationTransaksi extends Model
{
    use HasFactory;

    protected $table = "quotation_transaksis";
    protected $primaryKey = "id";
    protected $fillable = [
        'idQuotationTour',
        'namaQtransaksi',
        'productionPrice',
        'nettPrice',
        'paxPay',
        'surcharge',
        'sellingPrice',
        'totalPrice',
        'profit',
        'status',
        'created_at',
        'updated_at',
    ];

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function rekomendasi()
    {
        return $this->hasOne(quotationRekomendasi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function tdestinasi()
    {
        return $this->hasMany(TDestinasiWisata::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }

    public function ttransportasi()
    {
        return $this->hasMany(Ttransportasi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }

    public function tpenginapan()
    {
        return $this->hasMany(Tpenginapan::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }

    public function trumahmakan()
    {
        return $this->hasMany(TRumahMakan::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }

    public function tfasilitas()
    {
        return $this->hasMany(TFasilitasTour::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }

    public function tcrew()
    {
        return $this->hasMany(TcrewOp::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }

    public function tevent()
    {
        return $this->hasMany(Tevent::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }

    public function tbonus()
    {
        return $this->hasMany(Tbonus::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }
}
