<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\TFasilitasTour;

class fasilitasTour extends Model
{
    use HasFactory;

    protected $table = 'M_fasilitasTour';
    protected $primaryKey = 'idFasilitasTour';
    protected $fillable = [
        'ketFasilitasTour',
        'biayaFasilitas',
        'tglUpdatedFasilitas',
        'satuanFasilitas',
    ];
    

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tfasilitasTour()
    {
        return $this->hasMany(TFasilitasTour::class, 'idFasilitasTour', 'idFasilitasTour');
    }
}
