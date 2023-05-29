<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\dataBonus;
use App\Models\Quotation\quotationTransaksi;

class Tbonus extends Model
{
    use HasFactory;

    protected $table = "tbonuses";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function bonus()
    {
        return $this->belongsTo(dataBonus::class, 'idDataBonus', 'id');
    }

    // nggak punya id
    public function qtransaksi()
    {
        return $this->hasMany(quotationTransaksi::class, 'idTbonus', 'id');
    }
}
