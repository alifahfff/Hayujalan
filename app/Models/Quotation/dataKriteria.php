<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dataKriteria extends Model
{
    use HasFactory;

    protected $table = "data_kriterias";

    public function bobot()
    {
        return $this->belongsToMany(dataBobot::class,
            'kriteria_bobot',
            'idKriteria',
            'idBobot');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idKriteria', 'id');
    }
}
