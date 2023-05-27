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
        return $this->hasMany(quotationRekomendasi::class, 'idQuotationTransaksion', 'id');
    }

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function quotation()
    {
        return $this->belongsTo(quotationTour::class, 'idQuotationTour', 'id');
    }

    public function tdestinasi()
    {
        return $this->belongsTo(TDestinasiWisata::class, 'idTDestinasiWisata', 'id');
    }

    public function ttransportasi()
    {
        return $this->belongsTo(Ttransportasi::class, 'idTtransportasi', 'id');
    }

    public function tpenginapan()
    {
        return $this->belongsTo(Tpenginapan::class, 'idTpenginapan', 'id');
    }

    public function trumahmakan()
    {
        return $this->belongsTo(TRumahMakan::class, 'idTrm', 'id');
    }

    public function tfasilitas()
    {
        return $this->belongsTo(TFasilitasTour::class, 'idTft', 'id');
    }

    public function tcrew()
    {
        return $this->belongsTo(TcrewOp::class, 'idTcw', 'id');
    }

    public function tevent()
    {
        return $this->belongsTo(Tevent::class, 'idTevent', 'id');
    }

    public function tbonus()
    {
        return $this->belongsTo(Tbonus::class, 'idTbonus', 'id');
    }
}
