<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\Tbonus;

class dataBonus extends Model
{
    use HasFactory;

    protected $table = 'M_dataBonus';
    protected $primaryKey = 'idDataBonus';
    protected $fillable = [
        'ketDataBonus',
        'biayaDataBonus',
        'tglUpdateBonus',
        'satuanBonus',
    ];

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tbonus()
    {
        return $this->hasMany(Tbonus::class, 'idDataBonus', 'idDataBonus');
    }
}
