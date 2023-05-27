<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\TFasilitasTour;

class fasilitasTour extends Model
{
    use HasFactory;

    protected $table = "fasilitas_tours";
    protected $primaryKey = "id";

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tfasilitasTour()
    {
        return $this->hasMany(TFasilitasTour::class, 'idFasilitasTour', 'id');
    }
}
