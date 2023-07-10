<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotation\quotationTour;

class UserQuotation extends Model
{
    use HasFactory;

    protected $table = 'user_quotation';
    public $timestamps = false;
    protected $fillable = ['idUser', 'idQuotationTour'];


    // Menyatakan relasi many-to-many dengan model M_user
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_quotation', 'idUser', 'idUser');
    }

    public function quotationTours()
    {
        return $this->belongsToMany(QuotationTour::class, 'user_quotation', 'idUser', 'idQuotationTour');
    }
}
