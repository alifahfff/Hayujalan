<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\Tevent;

class dataEvent extends Model
{
    use HasFactory;

    protected $table = 'M_dataEvent';
    protected $primaryKey = 'idDataEvent';
    protected $fillable = [
        'ketDataEvent',
        'biayaDataEvent',
        'tglUpdateEvent',
        'satuanEvent',
    ];
    

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tevent()
    {
        return $this->hasMany(Tevent::class, 'idDataEvent', 'idDataEvent');
    }
}
