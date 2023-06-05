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

    protected $table = "quotation_rekomendasis";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function qTransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksion', 'id');
    }
    
    public function quotation()
    {
        return $this->belongsTo(quotationTour::class, 'idQuotationTour', 'id');
    }

    public function tdestinasi()
    {
        return $this->hasMany(TDestinasiWisata::class, 'idQuotationRekomendasi', 'id');
    }

    public function ttransportasi()
    {
        return $this->hasMany(Ttransportasi::class, 'idQuotationRekomendasi', 'id');
    }

    public function tpenginapan()
    {
        return $this->hasMany(Tpenginapan::class, 'idQuotationRekomendasi', 'id');
    }

    public function trumahmakan()
    {
        return $this->hasMany(TRumahMakan::class, 'idQuotationRekomendasi', 'id');
    }

    public function tfasilitas()
    {
        return $this->hasMany(TFasilitasTour::class, 'idQuotationRekomendasi', 'id');
    }

    public function tcrew()
    {
        return $this->hasMany(TcrewOp::class, 'idQuotationRekomendasi', 'id');
    }

    public function tevent()
    {
        return $this->hasMany(Tevent::class, 'idQuotationRekomendasi', 'id');
    }

    public function tbonus()
    {
        return $this->hasMany(Tbonus::class, 'idQuotationRekomendasi', 'id');
    }
}
