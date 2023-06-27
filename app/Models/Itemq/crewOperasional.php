<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\TcrewOp;

class crewOperasional extends Model
{
    use HasFactory;

    protected $table = 'M_crewOperasional';
    protected $primaryKey = 'idCrewOperasional';
    protected $fillable = [
        'ketCrewOperasional',
        'biyaCrewOperasional',
        'tglUpdateCrew',
        'satuanCrew',
    ];
   

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tcrew()
    {
        return $this->hasMany(TcrewOp::class, 'idCrewOperasional', 'idCrewOperasional');
    }
}
