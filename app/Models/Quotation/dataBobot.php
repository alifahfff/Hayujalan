<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dataBobot extends Model
{
    use HasFactory;

    protected $table = "data_bobots";

    public function kriteria()
    {
        return $this->belongsToMany(dataKriteria::class,
        'kriteria_bobot',
        'idBobot',
        'idKriteria');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idBobot', 'id');
    }
}
