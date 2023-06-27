<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\dataKategoriTour;
use App\Models\Akses\userProgram;
use App\Models\Akses\userSales;
use App\Models\Vendor\areaWisata;
use App\Models\Itemq\dataKlien;
use App\Models\User;

class quotationTour extends Model
{
    use HasFactory;

    protected $table = 'M_quotationTour';
    protected $primaryKey = 'idQuotationTour';
    protected $fillable = [
        'idDataKlien',
        'idQuotationTour',
        'idKriteria',
        'idBobot',
        'idAreaWisata',
        'M_d_idKriteria',
        'M_d_idBobot',
        'idKategoriTour',
        'namaProject',
        'durasiProject',
        'qty',
        'foc',
        'planWaktuPelaksanaan',
        'persentaseKeuntungan',
        'feeMarketing',
        'tglBerlakuQuotation',
    ];

     // nggak punya id
    // jenis klien mempunyai banyak klien
    public function rekomendasi()
    {
        return $this->hasMany(quotationRekomendasi::class, 'idQuotationTour', 'id');
    }

     // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function kategori()
    {
        return $this->belongsTo(dataKategoriTour::class, 'idKategoriTour', 'idKategoriTour');
    }

    public function areawisata()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWisata', 'idAreaWisata');
    }

    public function klien()
    {
        return $this->belongsTo(dataKlien::class, 'idDataKlien', 'idDataKlien');
    }

    public function mUsers()
    {
        return $this->belongsToMany(User::class, 'user_quotationTour', 'idQuotationTour')
            ->withPivot('idRoles', 'idUser')
            ->withTimestamps();
    }
}
