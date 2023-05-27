<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\fasilitasTour;
use App\Models\Quotation\quotationTransaksi;

class TFasilitasTour extends Model
{
    use HasFactory;

    protected $table = "t_fasilitas_tours";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function fasilitasTour()
    {
        return $this->belongsTo(fasilitasTour::class, 'idFasilitasTour', 'id');
    }

    // nggak punya id
    public function qtransaksi()
    {
        return $this->hasMany(quotationTransaksi::class, 'idTft', 'id');
    }
}
