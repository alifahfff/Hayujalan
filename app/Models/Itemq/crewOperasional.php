<?php

namespace App\Models\Itemq;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\TcrewOp;

class crewOperasional extends Model
{
    use HasFactory;

    protected $table = "crew_operasionals";
    protected $primaryKey = "id";

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tcrew()
    {
        return $this->hasMany(TcrewOp::class, 'idCrewOperasional', 'id');
    }
}
