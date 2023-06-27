<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaksi\Tpenginapan;

class vendorPenginapan extends Model
{
    use HasFactory;

    protected $table = 'M_vendorPenginapan';
    protected $primaryKey = 'idPenginapan';
    public $timestamps = true;

    protected $fillable = [
        'idAreaWisata',
        'namaPenginapan',
        'bintangPenginapan',
        'alamatPenginapan',
        'tlpPenginapan',
        'picPenginapan',
        'hpPicPenginapan',
        'kapasitasParkirBusPenginapan',
        'linkGmapsPenginapan',
        'tglBerlakuPenginapan',
    ];


    // nggak punya id
    public function detailPenginapan()
    {
        return $this->hasMany(detailVendorPenginapan::class, 'idPenginapan', 'idPenginapan');
    }

    // yang punya id one to many
    public function AWpenginapan()
    {
        return $this->belongsTo(areaWisata::class, 'idAreaWisata', 'idAreaWisata');
    }

    // nggak punya id
    // jenis klien mempunyai banyak klien
    public function tpenginapan()
    {
        return $this->hasMany(Tpenginapan::class, 'idPenginapan', 'idPenginapan');
    }
}
