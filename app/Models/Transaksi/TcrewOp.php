<?php

namespace App\Models\Transaksi;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\crewOperasional;
use App\Models\Quotation\quotationTransaksi;

class TcrewOp extends Model
{
    use HasFactory;

    protected $table = "tcrew_ops";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function crew()
    {
        return $this->belongsTo(crewOperasional::class, 'idCrewOperasional', 'id');
    }

    // nggak punya id
    public function qtransaksi()
    {
        return $this->hasMany(quotationTransaksi::class, 'idTcw', 'id');
    }
}
