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

class quotationTransaksi extends Model
{
    use HasFactory;

    protected $table = "quotation_transaksis";
    protected $primaryKey = "id";

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function rekomendasi()
    {
        return $this->hasOne(quotationRekomendasi::class, 'idQuotationTransaksion', 'id');
    }

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function quotation()
    {
        return $this->belongsTo(quotationTour::class, 'idQuotationTour', 'id');
    }

    public function tdestinasi()
    {
        return $this->hasMany(TDestinasiWisata::class, 'idQuotationTransaksion', 'id');
    }

    public function ttransportasi()
    {
        return $this->hasMany(Ttransportasi::class, 'idQuotationTransaksion', 'id');
    }

    public function tpenginapan()
    {
        return $this->hasMany(Tpenginapan::class, 'idQuotationTransaksion', 'id');
    }

    public function trumahmakan()
    {
        return $this->hasMany(TRumahMakan::class, 'idQuotationTransaksion', 'id');
    }

    public function tfasilitas()
    {
        return $this->hasMany(TFasilitasTour::class, 'idQuotationTransaksion', 'id');
    }

    public function tcrew()
    {
        return $this->hasMany(TcrewOp::class, 'idQuotationTransaksion', 'id');
    }

    public function tevent()
    {
        return $this->hasMany(Tevent::class, 'idQuotationTransaksion', 'id');
    }

    public function tbonus()
    {
        return $this->hasMany(Tbonus::class, 'idQuotationTransaksion', 'id');
    }
}
