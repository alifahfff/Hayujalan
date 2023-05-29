<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\dataEvent;
use App\Models\Quotation\quotationTransaksi;

class Tevent extends Model
{
    use HasFactory;

    protected $table = "tevents";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function event()
    {
        return $this->belongsTo(dataEvent::class, 'idDataEvent', 'id');
    }

    // nggak punya id
    public function qtransaksi()
    {
        return $this->hasMany(quotationTransaksi::class, 'idTevent', 'id');
    }
}
