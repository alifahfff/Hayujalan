<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dataBobot extends Model
{
    use HasFactory;

    protected $table = "data_bobots";

    // public function kriteria()
    // {
    //     return $this->belongsToMany(dataKriteria::class,
    //     'kriteria_bobot',
    //     'idBobot',
    //     'idKriteria');
    // }

    // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function kriteria()
    {
        return $this->belongsTo(dataKriteria::class, 'idKriteria', 'id');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function quotation()
    {
        return $this->hasMany(quotationTour::class, 'idBobot', 'id');
    }
}
