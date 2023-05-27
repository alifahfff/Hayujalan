<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\Tbonus;

class dataBonus extends Model
{
    use HasFactory;

    protected $table = "data_bonuses";
    protected $primaryKey = "id";

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tbonus()
    {
        return $this->hasMany(Tbonus::class, 'idDataBonus', 'id');
    }
}
