<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class quotationRekomendasi extends Model
{
    use HasFactory;

    protected $table = "quotation_rekomendasis";
    protected $primaryKey = "id";

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function qTransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksion', 'id');
    }
    
    public function quotation()
    {
        return $this->belongsTo(quotationTour::class, 'idQuotationTour', 'id');
    }
}
