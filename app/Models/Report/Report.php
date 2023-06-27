<?php

namespace App\Models\Report;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotation\quotationTransaksi;

class Report extends Model
{
    use HasFactory;
    protected $table = "reports";
    protected $primaryKey = "id";

    public function qtransaksi()
    {
        return $this->belongsTo(quotationTransaksi::class, 'idQuotationTransaksi', 'id');
    }
}
