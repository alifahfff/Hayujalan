<?php

namespace App\Models\Quotation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Itemq\dataKategoriTour;
use App\Models\Akses\userProgram;
use App\Models\Akses\userSales;
use App\Models\Vendor\areaWisata;
use App\Models\Itemq\dataKlien;

class quotationTour extends Model
{
    use HasFactory;

    protected $table = "quotation_tours";
    protected $primaryKey = "id";
    protected $fillable = [
        'idKategoriTour',
        'namaProject',
        'durasiProject',
        'qty',
        'foc',
        'planWaktuPelaksanaan',
        'presentaseKeuntungan',
        'feeMarketing',
        'idUserProgram',
        'idUserSales',
        'idAreaWisata',
        'idDataKlien',
        'created_at',
        'updated_at',
    ];

     // nggak punya id
    // jenis klien mempunyai banyak klien
    public function rekomendasi()
    {
        return $this->hasMany(quotationRekomendasi::class, 'idQuotationTour', 'id');
    }
    
    public function qtransaksi()
    {
        return $this->hasMany(quotationTransaksi::class, 'idQuotationTour', 'id');
    }

     // yang punya id one to many
    // klien memiliki data yang ada pada jenis klien
    public function kategori()
    {
        return $this->belongsTo(dataKategoriTour::class, 'idKategoriTour', 'id');
    }

    public function userprogram()
    {
        return $this->belongsTo(userProgram::class, 'idUserProgram', 'id');
    }

    public function usersales()
    {
        return $this->belongsTo(userSales::class, 'idUserSales', 'id');
    }

    public function areawisata()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWisata', 'id');
    }

    public function kriteria()
    {
        return $this->belongsTo(dataKriteria::class, 'idKriteria', 'id');
    }

    public function bobot()
    {
        return $this->belongsTo(dataBobot::class, 'idBobot', 'id');
    }

    public function klien()
    {
        return $this->belongsTo(dataKlien::class, 'idDataKlien', 'id');
    }
}
