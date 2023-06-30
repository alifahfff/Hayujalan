<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\dataKategoriTour;
use App\Models\Vendor\areaWisata;

class dataBobot extends Model
{
    use HasFactory;

    protected $table = 'M_bobot';
    protected $primaryKey = 'idBobot';
    protected $fillable = [
        'idKriteria',
        'idBobot',
        'namaBobot',
        'jumlahBobot',
        'created_at', 
        'updated_at'
    ];

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
        return $this->belongsTo(dataKriteria::class, 'idKriteria', 'idKriteria');
    }

    public function mDataKategoriTour()
    {
        return $this->hasMany(dataKategoriTour::class, 'idBobot', 'idBobot');
    }

    public function mAreaWisata()
    {
        return $this->hasMany(areaWisata::class, 'idBobot', 'idBobot');
    }
}
