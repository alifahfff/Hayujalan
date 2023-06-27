<?php

namespace App\Models\Akses;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class roles extends Model
{
    use HasFactory;

    protected $table = 'm_roles';
    protected $primaryKey = 'idRoles';
    public $incrementing = false;
    public $timestamps = true;

    // nggak punya id
    public function user()
    {
        return $this->hasMany(User::class, 'idRoles', 'idRoles');
    }
}
