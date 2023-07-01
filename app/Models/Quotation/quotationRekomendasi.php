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

class quotationRekomendasi extends Model
{
    use HasFactory;

    protected $table = 'R_quotationRekomendasi';
    protected $primaryKey = 'idQuotatioRekomendasi';
    public $timestamps = false;

    protected $fillable = [
        'idQuotationTransaksi',
        'idQuotationTour',
        'idQuotatioRekomendasi',
        'totalPriceRef',
        'bref_areaWisata',
        'bref_kategori',
        'bref_durasi',
        'bref_budget',
        'bref_jumlahOrang',
        'created_at',
        'updated_at',
    ];
    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function qTransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'idQuotationTransaksi');
    }
    
    public function quotation()
    {
        return $this->belongsTo(quotationTour::class, 'idQuotationTour', 'idQuotationTour');
    }

    public function tdestinasi()
    {
        return $this->hasMany(TDestinasiWisata::class, 'idQuotationRekomendasi', 'idQuotationRekomendasi');
    }

    public function ttransportasi()
    {
        return $this->hasMany(Ttransportasi::class, 'idQuotationRekomendasi', 'idQuotationRekomendasi');
    }

    public function tpenginapan()
    {
        return $this->hasMany(Tpenginapan::class, 'idQuotationRekomendasi', 'idQuotationRekomendasi');
    }

    public function trumahmakan()
    {
        return $this->hasMany(TRumahMakan::class, 'idQuotationRekomendasi', 'idQuotationRekomendasi');
    }

    public function tfasilitas()
    {
        return $this->hasMany(TFasilitasTour::class, 'idQuotationRekomendasi', 'idQuotationRekomendasi');
    }

    public function tcrew()
    {
        return $this->hasMany(TcrewOp::class, 'idQuotationRekomendasi', 'idQuotationRekomendasi');
    }

    public function tevent()
    {
        return $this->hasMany(Tevent::class, 'idQuotationRekomendasi', 'idQuotationRekomendasi');
    }

    public function tbonus()
    {
        return $this->hasMany(Tbonus::class, 'idQuotationRekomendasi', 'idQuotationRekomendasi');
    }
}
