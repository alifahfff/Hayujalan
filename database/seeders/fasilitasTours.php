<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class fasilitasTours extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('fasilitas_tours')->insert([
            [
                'ketFasilitas' => 'Banner Kegiatan',
                'biayaFasilitas' => 45000,
                'satuan' => '/pcs/industri'
            ],
        ]);
    }
}
