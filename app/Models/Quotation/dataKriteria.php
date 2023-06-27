<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dataKriteria extends Model
{
    use HasFactory;

    protected $table = 'M_kriteria';
    protected $primaryKey = 'idKriteria';
    protected $fillable = [
        'namaKriteria',
        'ketKriteria',
    ];

    // public function bobot()
    // {
    //     return $this->belongsToMany(dataBobot::class,
    //         'kriteria_bobot',
    //         'idKriteria',
    //         'idBobot');
    // }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function bobot()
    {
        return $this->hasMany(dataBobot::class, 'idKriteria', 'idKriteria');
    }
}
